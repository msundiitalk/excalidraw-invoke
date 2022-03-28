const path = require("path");

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function (config, env) {
    return config;
  },

  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.static = [
        {
          directory: path.resolve(
            __dirname,
            "./node_modules/@excalidraw/excalidraw"
          ),
          publicPath: ["/excalidraw"],
        },
        config.static,
      ];
      return config;
    };
  },
};
