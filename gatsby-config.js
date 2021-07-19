require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Homely",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-dynamodb",
      options: {
        typeName: "Illu",
        accessKeyId: process.env.GATSBY_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.GATSBY_AWS_SECRET_ACCESS_KEY,
        region: "us-east-2",
        params: {
          TableName: "UserData",
          // OTHER PARAMS HERE
        },
      },
    },
  ],
};
