import {
  SITE_NAME,
  SITE_URL,
  SITE_DEFAULT_TITLE,
  SITE_DEFAULT_DESCRIPTION,
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

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <meta name="author" content={SITE_NAME} />
      <meta name="publisher" content={SITE_NAME} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:locale" content="bn_BD" />
      {SITE_URL ? <meta property="og:url" content={url} /> : null}
      {image ? <meta property="og:image" content={image} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {SITE_URL ? <link rel="canonical" href={url} /> : null}
      {SITE_URL ? (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE_NAME,
            url: `${SITE_URL}/`,
            inLanguage: 'bn-BD',
          })}
        </script>
      ) : null}
    </>
  );
}
