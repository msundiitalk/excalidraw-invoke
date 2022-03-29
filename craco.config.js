const path = require("path");

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname,
                "./node_modules/@excalidraw/excalidraw"
        ),
        contentBasePublicPath: "/excalidraw",
    },
}