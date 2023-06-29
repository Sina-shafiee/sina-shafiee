export const homePageQuery = /* GraphQL */ `
  query HomeData {
    home: homePage {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
    site: _site {
      favIcon: faviconMetaTags {
        content
        tag
        attributes
      }
    }
  }
`;

export const homePageDetailSectionQuery = /* GraphQL */ `
  query HomeDetailData {
    homePage {
      description {
        blocks {
          __typename
          ... on ImageBlockRecord {
            id
            image {
              responsiveImage(
                imgixParams: { fm: jpg, fit: crop, w: 2000, h: 1000 }
              ) {
                srcSet
                webpSrcSet
                sizes
                src
                width
                height
                aspectRatio
                alt
                title
                base64
              }
            }
          }
        }
        value
        links
      }
    }
  }
`;

export const navbarQuery = /* GraphQL */ `
  query Navbar {
    navbar {
      userJob
      userFirstName
      userLastName
      navLinks {
        url
        title
        textContent
        rel
      }
    }
  }
`;

export const projectPageQuery = /* GraphQL */ `
  query ProjectPageData {
    projects: projectPage {
      seo: _seoMetaTags {
        tag
        content
        attributes
      }
    }
    site: _site {
      favIcon: faviconMetaTags {
        content
        tag
        attributes
      }
    }
  }
`;

export const projectsQuery = /* GraphQL */ `
  query Projects {
    projects: allProjects(orderBy: _createdAt_ASC) {
      slug
      title
      featuredImage {
        responsiveImage(imgixParams: { fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
    }
  }
`;

export const projectSlugsQuery = /* GraphQL */ `
  query ProjectsSlugs {
    projects: allProjects {
      slug
    }
  }
`;

export const singleProjectQuery = /* GraphQL */ `
  query SingleProject($slug: String) {
    site: _site {
      favIcon: faviconMetaTags {
        content
        tag
        attributes
      }
    }
    project(filter: { slug: { eq: $slug } }) {
      id
      slug
      title
      previewUrl
      description {
        links
        value
        blocks
      }
      images {
        responsiveImage(imgixParams: { fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
`;
