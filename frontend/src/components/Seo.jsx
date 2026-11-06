import {
  SITE_NAME,
  SITE_URL,
  SITE_DEFAULT_TITLE,
  SITE_DEFAULT_DESCRIPTION,
  SITE_DEFAULT_IMAGE,
} from '../seoConfig';

export default function Seo({
  title,
  description,
  path = '/',
  type = 'website',
  image,
}) {
  const safePath = path.startsWith('/') ? path : `/${path}`;
  const url = `${SITE_URL}${safePath}`;
  const pageTitle = title || SITE_DEFAULT_TITLE;
  const pageDescription = description || SITE_DEFAULT_DESCRIPTION;
  const pageImage = image || SITE_DEFAULT_IMAGE;

  // Service পেজের জন্য BreadcrumbList ও WebPage schema
  const isServicePage = safePath.startsWith('/service/');
  const serviceName = pageTitle.split('|')[0].trim();

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: 'bn-BD',
  };

  const webPageSchema = isServicePage
    ? {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: pageTitle,
        description: pageDescription,
        url: url,
        inLanguage: 'bn-BD',
        isPartOf: {
          '@type': 'WebSite',
          name: SITE_NAME,
          url: `${SITE_URL}/`,
        },
      }
    : null;

  const breadcrumbSchema = isServicePage
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'হোম',
            item: `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: serviceName,
            item: url,
          },
        ],
      }
    : null;

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <meta name="author" content={SITE_NAME} />
      <meta name="publisher" content={SITE_NAME} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:locale" content="bn_BD" />
      {SITE_URL ? <meta property="og:url" content={url} /> : null}
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={pageTitle} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:alt" content={pageTitle} />

      {/* Canonical */}
      {SITE_URL ? <link rel="canonical" href={url} /> : null}

      {/* Schema.org — WebSite */}
      {SITE_URL ? (
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      ) : null}

      {/* Schema.org — WebPage (service পেজ) */}
      {SITE_URL && webPageSchema ? (
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      ) : null}

      {/* Schema.org — BreadcrumbList (service পেজ) */}
      {SITE_URL && breadcrumbSchema ? (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      ) : null}
    </>
  );
}
