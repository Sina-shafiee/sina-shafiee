import { cache } from 'react';

const dedupedFetch = cache(async (serializedInit: string) => {
  const response = await fetch(
    'https://graphql.datocms.com/',
    JSON.parse(serializedInit)
  );
  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(
        responseBody
      )}`
    );
  }

  return responseBody;
});

export async function performRequest<T>({
  query,
  variables = {},
  includeDrafts = false,
  visualEditingBaseUrl,
  revalidate
}: {
  query: string;
  variables?: { [x: string]: string };
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
  visualEditingBaseUrl?: string;
  revalidate?: string | number;
}): Promise<T> {
  const { data } = await dedupedFetch(
    JSON.stringify({
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
        'X-Exclude-Invalid': 'true',
        ...(includeDrafts ? { 'X-Include-Drafts': 'true' } : {}),
        ...(visualEditingBaseUrl
          ? {
              'X-Visual-Editing': 'vercel-v1',
              'X-Base-Editing-Url': visualEditingBaseUrl
            }
          : {}),
        ...(process.env.NEXT_DATOCMS_ENVIRONMENT
          ? { 'X-Environment': process.env.NEXT_DATOCMS_ENVIRONMENT }
          : {})
      },
      body: JSON.stringify({ query, variables, revalidate }),
      next: { revalidate }
    })
  );

  return data;
}
