const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.merge({
      node: {
        fs: 'empty',
      },
    });

    config.module // fixes https://github.com/graphql/graphql-js/issues/1272
      .rule('mjs$')
      .test(/\.mjs$/)
      .include.add(/node_modules/)
      .end()
      .type('javascript/auto');

    config.merge({
      entry: {
        editor: require.resolve('./src/editor.ts'),
      },
    });

    config.plugin('editor').use(HtmlWebpackPlugin, [
      {
        inject: false,
        template: require.resolve('./public/index.html'),
        filename: 'index.html',
      },
    ]);

    config.plugin('preview').use(HtmlWebpackPlugin, [
      {
        inject: false,
        template: require.resolve('./public/preview.html'),
        filename: 'preview.html',
      },
    ]);

    config.resolve.merge({
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    });
  });
};
