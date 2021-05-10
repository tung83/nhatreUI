const navNodeType = require('../components/nav-node');

const name = 'StrapiTopMenu';

module.exports = {
    name,
    def: `
      type ${name} implements Node @infer {
        left: [${navNodeType.name}]
        right: [${navNodeType.name}]
      }
    `,
};
