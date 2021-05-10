/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const glob = require('glob');
const path = require('path');

const {
    createArticlePages,
} = require('./gatsby-node/create-page-articles');
const { resolveMedia } = require('./gatsby-node/create-resolver-media');
const {
    createBlogPages,
} = require('./gatsby-node/create-page-blogs');

// Dynamic pages all created here
exports.createPages = async ({ actions: { createPage }, graphql }) => {
    // Query all dynamic content
    const { data } = await graphql(`
        {
            articles: allStrapiArticles {
                edges {
                    node {
                        slug
                        category_slug
                    }
                }
            }
            blogs: allStrapiBlogs {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    if (data) {
        const { articles, blogs } = data;
        createArticlePages(
            articles.edges.map(x => x.node),
            createPage,
        );

        createBlogPages(
            blogs.edges.map(x => x.node.slug),
            createPage,
        );
    }
};

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
    let schemas = '';

    // Shared components go first
    glob.sync('./schemas/components/*.js').forEach(file => {
        schemas += require(path.resolve(file)).def;
    });
    // Then collection types
    glob.sync('./schemas/collections/*.js').forEach(file => {
        schemas += require(path.resolve(file)).def;
    });
    // Last single type as they depends on everything
    glob.sync('./schemas/single/*.js').forEach(file => {
        schemas += require(path.resolve(file)).def;
    });

    // Debug
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.log('--- ALL CUSTOM SCHEMAS ---', schemas);
    }

    // Finally register them all
    createTypes(schemas);
};

exports.createResolvers = ctx => {
    const { createResolvers } = ctx;

    const parseSourceFiles = () => {
        const result = {};
        glob.sync('./schemas/**/*.js').forEach(file => {
            const { name, def } = require(path.resolve(file));
            result[name] = [];
            // Normalise each lines of the definition
            const lines = def.split(/[\n\r]/).map(x => x.trim());
            // For each line, find if they are "File" type
            lines.forEach(line => {
                if (line.indexOf('File') > 0) {
                    result[name].push(line.split(/[: ]/)[0]);
                }
            });
        });
        return result;
    };

    const sourceTypes = parseSourceFiles();

    const resolveObject = {};

    // From the result of parsing all the schema files
    Object.keys(sourceTypes).forEach(type => {
        // Has some media
        if (sourceTypes[type] && sourceTypes[type].length > 0) {
            // Create the prop
            resolveObject[type] = {};
            // Create the resolver for each media field
            sourceTypes[type].forEach(field => {
                resolveObject[type][field] = resolveMedia(ctx, field);
            });
        }
    });

    // Debug
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.log('--- ALL MEDIA FIELDS ---', resolveObject);
    }

    // Custom schema gatsby-image
    createResolvers(resolveObject);
};
