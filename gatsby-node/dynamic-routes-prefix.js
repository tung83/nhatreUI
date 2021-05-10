// JS file because it needs to be shared with gatsby-node.js too
const blogs =
    process.env.TW_WEBSITE_UI_ROUTES_BUSINESS_TYPES || '/bai-viet';

module.exports = {
    blogs,
};
