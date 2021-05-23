const name = 'StrapiBlogTags';

module.exports = {
    name,
    def: `
      type ${name} implements Node @infer {
        tag: String
        level1: String
        level2: String
      }
    `,
};
