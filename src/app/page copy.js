import LayoutWrapper from "../components/LayoutWrapper";
import styles from "./page.module.css";


const jsonLdHome =[{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Prof. Dr. Jon Doe",
        item: "https://www.jondoe.com",
      },
      // Add more for nested pages, such as an About page
      // {
      //   "@type": "ListItem",
      //   position: 2,
      //   name: "About",
      //   item: "https://www.jondoe.com/about",
      // },
    ],
  }, {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "@id": "https://www.jondoe.com/#website",
    name: "Prof. Dr. Jon Doe",
    alternateName: "jondoe.com",
    headline: "Scientific Findings",
    description: "Portfolio page of Jon Doe.",
    url: "https://www.jondoe.com",
    inLanguage: "en",
    publisher: {
      "@type": "Person",
      name: "Prof. Dr. Jon Doe",
      url: "https://www.jondoe.com",
    },
    producer: {
      "@type": "Person",
      name: "Prof. Dr. Jon Doe",
      url: "https://www.jondoe.com",
    },
    provider: {
      "@type": "Person",
      name: "Prof. Dr. Jon Doe",
      url: "https://www.jondoe.com",
    },
    keywords: [
      "Science papers",
      "Jon Doe Vita"
    ],
  }]

export default function Home() {
  return (
    <LayoutWrapper jsonld={jsonLdHome}>
      <main className={styles.main}>
          <p>
            <code className={styles.code}>Get started by editing structured data.</code>
          </p>
      </main>
    </LayoutWrapper>
  );
}
