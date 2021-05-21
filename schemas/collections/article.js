
const strapiBase = require('../blocks/strapi-model-base');
const paragraphType = require('../components/paragraph');

const name = 'StrapiArticles';

module.exports = {
    name,
    def: `
      type ${name} implements Node @infer {
        title: String        
        paragraphs: [${paragraphType.name}]
        slug: String
        category_slug: String
        ${strapiBase.def}
      }
    `,
};

