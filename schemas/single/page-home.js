const pageMetaType = require('../components/001_page-meta');
const name = 'StrapiPageHome';
module.exports = {
    name,
    def: `
      type ${name} implements Node @infer {
        header: ${pageMetaType.name}
      }
    `,
};
