const stringSplitContentTypes = str => str.split(/[, \n\r]/g).filter(x => !!x);

module.exports = {
    siteMetadata: {
        title: `Moms' House và Babies' House`,
        // eslint-disable-next-line max-len
        description: `momshouse, babieshouse, Moms' House và Babies' House, momshouseandbabieshouse, momshouse va babieshouse,momshousevababieshouse`,
        author: `momshouse, babieshouse`,
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/gatsby-config.js`,
            },
        },
        {resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /\.inline\.svg$/
                }
            }
        },
        // Strapi GQL
        {
            resolve: `gatsby-source-strapi`,
            options: {
                // eslint-disable-next-line max-len
                apiURL: process.env.TW_WEBSITE_API_URL || `https://momshouseandbabieshouse.herokuapp.com`,
                contentTypes: stringSplitContentTypes(
                    process.env.TW_WEBSITE_CMS_CONTENT_TYPES ||
                        `
                            articles,
                            blogs
                        `,
                ),
                singleTypes: stringSplitContentTypes(
                    process.env.TW_WEBSITE_CMS_SINGLE_TYPES ||
                        `
                            top-menu,
                            page-home,
                        `,
                ),
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Momshouse.io`,
                short_name: `Momshouse`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                // TODO: Momshouse icon
                icon: `src/images/momshouse-ico.png`,
            },
        },
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-plugin-emotion`,
            options: {
                sourceMap: true,
                autoLabel: 'dev-only',
                labelFormat: `[local]`,
                cssPropOptimization: true,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Poppins:wght@400;700`,`Lobster:wght@400;700`],
                display: 'swap',
            },
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "GTM-KGW6SGX",          
                // Defaults to false only be loaded in production.
                includeInDevelopment: false
            },
        },
        // this (optional) plugin enables
        // Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
