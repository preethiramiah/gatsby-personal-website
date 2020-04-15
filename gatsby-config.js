module.exports = {
    plugins: [
        "gatsby-plugin-top-layout",
        "gatsby-transformer-json",
        {
            resolve: "gatsby-plugin-material-ui",
            options: {
                //   injectFirst: true,
            },
        },
        "gatsby-plugin-react-helmet",
    ],
    siteMetadata: {
        title: "Preethi Ramiah",
    },
};
