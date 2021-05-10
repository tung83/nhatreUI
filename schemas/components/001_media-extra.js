const name = 'StrapiComponentMediaExtra';

module.exports = {
    name,
    def: `
      type ${name} {
        id: Int
        media: File
        caption: String
      }
    `,
};
