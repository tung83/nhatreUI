const name = 'StrapiModelBaseUser';

module.exports = {
    name,
    def: `
      type ${name} {
        firstname: String
        lastname: String
      }
    `,
};
