const navItemType = require('./001_nav-item');
const name = 'StrapiComponentNavNode';

module.exports = {
    name,
    def: `
      type ${name} {
        id: Int
        name: String
        item: ${navItemType.name}
        is_button: Boolean
        children: [${navItemType.name}]
      }
    `,
};
