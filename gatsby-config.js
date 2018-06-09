module.exports = {
  siteMetadata: {
    title: `Justin's Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-94088018-1`,
        anonymize: true,
        respectDNT: true
      },
    },
  ],
};
