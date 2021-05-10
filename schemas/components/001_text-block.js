const name = 'StrapiComponentTextBlock';

module.exports = {
    name,
    def: `
      type ${name} {
        id: Int
        title: String
        subtitle: String
        body: String
        media: File
        svg1: String
        svg2: String
      }
    `,
};
