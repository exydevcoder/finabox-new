export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org', // Don't touch here
    '@type': 'SoftwareApplication', // Tells Google this is an app/software

    // Step 2: Basic details about the app
    name: 'Finabox', // App name
    description: 'Smart, secure inbox for financial communication. Cut SMS costs and deliver instant alerts with built-in dispute tools.', // Short app description
    url: 'https://finabox.com.ng', // Official website

    // Step 3: App category and supported platforms
    applicationCategory: 'FinanceApplication', // Classify as a financial app
    operatingSystem: 'Web, iOS, Android', // Platforms it works on

    // Step 4: Pricing information
    offers: {
      '@type': 'Offer', // Define a pricing "offer"
      price: '0', // Indicates it's free
      priceCurrency: 'USD', // Currency format
      description: 'Free tier available' // Optional clarification
    },

    // Step 5: User ratings
    // "aggregateRating": {
    //   "@type": "AggregateRating",   // Tells Google this is a rating
    //   "ratingValue": "4.8",         // Average rating
    //   "reviewCount": "150"          // Number of reviews
    // },

    // Step 6: Author or publisher of the app
    author: {
      '@type': 'Organization', // Entity type
      name: 'Finabox', // Organization name
      url: 'https://finabox.com.ng' // Organization website
    }
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}
