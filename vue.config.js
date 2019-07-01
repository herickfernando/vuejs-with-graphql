module.exports = {
  lintOnSave: 'error',
  devServer: {
    proxy: {
      '/graphql': {
        changeOrigin: true,
        target: 'https://api.graphcms.com/simple/v1/awesomeTalksClone',
      },
    },
  },
};
