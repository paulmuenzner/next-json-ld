import { mainConfigData } from "../../data";

const JsonLdContent = ({ jsonLd }) => {
  return (
    <>
      {jsonLd.map((x, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(x) }}
        />
      ))}
    </>
  );
};


const LayoutWrapper = ({ jsonld, children, meta }) => {
  return (
    <>
      <head>
        <JsonLdContent jsonLd={jsonld} />
        <title>{meta.title}</title>
        {/* <meta name="google-site-verification" content={GA_MEASUREMENT_ID} /> */}
        <meta name="copyright" content={mainConfigData.website_name} />
        <meta content={mainConfigData.language} name="language" />
        
        <meta name="keywords" content={meta.keywords} />
        <meta name="description" content={meta.description} />
        <meta name="author" content={meta.author}></meta>
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.imagePath} />
       

        <meta content="text/html" httpEquiv="Content-Type" />
        <link rel="canonical" href={meta.url} />
        <link rel="alternate" hrefLang="x-default" href={meta.url} />
        {/* 
        ---------------- Icon ---------------      
        */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <div className="top_layout_wrap">{children}</div>
      </body>
    </>
  );
}

export default LayoutWrapper;