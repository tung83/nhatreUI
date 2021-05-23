const blogTag = require('./001_blog-tag');
const strapiBase = require('../blocks/strapi-model-base');
const paragraphType = require('../components/paragraph');

const name = 'StrapiBlogs';

module.exports = {
    name,
    def: `
      type ${name} implements Node @infer {
        title: String
        slug: String
        thumbnail: File
        paragraphs: [${paragraphType.name}]
        post_date: Date
        in_home: Boolean
        blog_tag: ${blogTag.name}
        ${strapiBase.def}
      }
    `,
};