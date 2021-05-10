
const strapiBase = require('../blocks/strapi-model-base');

const name = 'StrapiArticles';

module.exports = {
    name,
    def: `
      type ${name} implements Node @infer {
        title: String
        content: String
        slug: String
        category_slug: String
        ${strapiBase.def}
      }
    `,
};

