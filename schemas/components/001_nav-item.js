const name = 'StrapiComponentNavItem';
module.exports = {
    name,
    def: `
      type ${name} {
        id: Int
        title: String
        link: String
        enabled: Boolean
        svg: String
        subTitle: String
        icon: File
      }
    `,
};
