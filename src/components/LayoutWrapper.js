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


const LayoutWrapper = ({ jsonld, children }) => {
  return (
    <>
      <head>
        <JsonLdContent jsonLd={jsonld} />           
        {/* 
        ------------- Basic Meta Tags ---------------      
        */}
        <meta content="text/html" httpEquiv="Content-Type" />
        <meta name="copyright" content="Prof. Dr. Jon Doe" />
      </head>
      <body>
        <div className="top_layout_wrap">{children}</div>
      </body>
    </>
  );
}

export default LayoutWrapper;