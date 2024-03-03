export default () => ({
  uploadPath:
    process.env.NODE_ENV === 'production'
      ? process.env.PROD_UPLOAD_PATH
      : process.env.DEV_UPLOAD_PATH,

  secret: process.env.SECRET,
});
