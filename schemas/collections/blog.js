const blogTag = require('./001_blog-tag');
const strapiBase = require('../blocks/strapi-model-base');

const name = 'StrapiBlogs';

module.exports = {
    name,
    def: `
      type ${name} implements Node @infer {
        title: String
        content: String
        post_date: Date
        in_home: Boolean
        blog_tag: ${blogTag.name}
        ${strapiBase.def}
      }
    `,
};