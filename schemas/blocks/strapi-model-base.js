const userType = require('../components/001_strapi-user');

module.exports = {
    def: `
        created_at: Date
        published_at: Date
        created_by: ${userType.name}
        updated_by: ${userType.name}
    `,
};
