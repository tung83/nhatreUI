const { blogs } = require('./dynamic-routes-prefix');

exports.createBlogPages = (slugs, createPage) => {
    slugs.forEach(slug => {
        const componentPath = '../src/templates/Blog/index.tsx';
        createPage({
            path: `${blogs}/${slug}`,
            component: require.resolve(componentPath),
            context: {
                slug,
            },
        });
    });
};
