const name = 'StrapiComponentPageMeta';

module.exports = {
    name,
    def: `
      type ${name} {
        id: Int
        heading_text: String
        heading_subText: String
        heading_image: File
        link: String
      }
    `,
};
