const mediaExtraType = require('./001_media-extra');
const name = 'StrapiComponentParagraph';

module.exports = {
    name,
    def: `
      type ${name} {
        id: Int
        body: String
        before_image: ${mediaExtraType.name}
        after_image: ${mediaExtraType.name}
      }
    `,
};
