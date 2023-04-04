import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Palguno Wicaksono`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Explore the world through the written word!`,
    author: `Palguno Wicaksono`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-google-gtag", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-postcss", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog`,
      path: `${__dirname}/src/blog`,
    },
  },
  `gatsby-transformer-remark`,
   "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },]
};

export default config;
