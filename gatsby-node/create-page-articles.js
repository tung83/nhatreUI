exports.createArticlePages = (articles, createPage) => {
    const componentPath = '../src/templates/Articles/index.tsx';
    articles.forEach(article => {
        createPage({
            path: `${article.category_slug || ''}/${article.slug  || ''}`,
            component: require.resolve(componentPath),
            context: {
                slug: article.slug,
            },
        });
    });
};
