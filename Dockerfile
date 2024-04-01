FROM --platform=linux/amd64 node:20-alpine AS deps
RUN apk add --no-cache libc6-compat openssl

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml\* ./

RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
    else echo "Lockfile not found." && exit 1; \
    fi


FROM --platform=linux/amd64 node:20-alpine AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG UPSTASH_REDIS_REST_URL
ARG UPSTASH_REDIS_REST_TOKEN
# ENV UPSTASH_REDIS_REST_URL ${UPSTASH_REDIS_REST_URL}
# ENV UPSTASH_REDIS_REST_TOKEN ${UPSTASH_REDIS_REST_TOKEN}
RUN \
    if [ -f yarn.lock ]; then yarn build; \
    elif [ -f package-lock.json ]; then npm run build; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm run build; \
    else echo "Lockfile not found." && exit 1; \
    fi

FROM --platform=linux/amd64 gcr.io/distroless/nodejs20-debian12 AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["server.js"]