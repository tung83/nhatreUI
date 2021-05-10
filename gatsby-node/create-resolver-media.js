const { createRemoteFileNode } = require('gatsby-source-filesystem');

exports.resolveMedia = (ctx, fieldName) => {
    const {
        actions: { createNode },
        store,
        cache,
        createNodeId,
        reporter,
    } = ctx;
    return {
        type: `File`,
        resolve(source) {
            const mediaField = fieldName || 'media';
            if (!source[mediaField] || !source[mediaField].url) {
                return null;
            }
            let sourceUrl = source[mediaField].url;
            if(!source[mediaField].url.startsWith('http')){
                sourceUrl = `${process.env.TW_WEBSITE_API_URL}${source[mediaField].url}`;                
            }

            return createRemoteFileNode({
                url: sourceUrl,
                store,
                cache,
                createNode,
                createNodeId,
                reporter,
            });
        },
    };
};
