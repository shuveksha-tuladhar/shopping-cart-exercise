module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '201bdd563f051e46eb906d8a173b2d5a'),
  },
});
