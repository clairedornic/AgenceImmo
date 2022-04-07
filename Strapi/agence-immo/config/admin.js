module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '55d7ca29bfba3bd15c1ab51dc4d0d00c'),
  },
});
