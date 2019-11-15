/**
 * @author v4 <lucky6616888@163.com>
 * Created by v4 on 2019-09-27 09:44
 */


const webpack = require('webpack')
module.exports = {
  devServer: {
    // 设置反向代理
    proxy: {
      "/api": {
        target: "http://192.168.0.98:7072",
        ws: true,
        changOrigin: true,
        pathRequiresRewrite: {
          "^/api": "/api"
        }
      }
    }
  },

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jquery: "jquery",
      })
    ],

  }
};