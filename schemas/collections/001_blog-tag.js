const name = 'StrapiBlogTags';

module.exports = {
    name,
    def: `
      type ${name} implements Node @infer {
        tag: String
      }
    `,
};
