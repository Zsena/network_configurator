// webpack.mix.js

const mix = require("laravel-mix");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
require("laravel-mix-ejs");

mix.webpackConfig({
  stats: {
      children: true,
  },
});

if (!mix.inProduction()) {
  mix
    // sets public path for manifest file
    .setPublicPath("dist/")

    // bundles js: (from, to)
    .js("src/js/main.js", "dist/js")

    // compiles sass and add css3 prefixes: (from, to)
    .postCss("src/css/main.css", "dist/css", [
      require("postcss-import"),
      require("tailwindcss"),
    ]);

    // compiles ejs templates: (from, to, contents, options)
    mix.ejs("src/index.ejs", "dist", {}, { base: "src" });

    // serves assets and sync with browser sync
    mix.browserSync({ server: 'dist', proxy: null })

} else {
  mix
    // sets public path for manifest file
    .setPublicPath("dist/")

    // bundles js: (from, to)
    .js("src/js/main.js", "dist/js")

    // compiles sass and add css3 prefixes: (from, to)
    .postCss("src/css/main.css", "dist/css", [
      require("postcss-import"),
      require("tailwindcss"),
    ]);

  // compiles ejs templates: (from, to, contents, options)
  mix
    .ejs("src/index.ejs", "dist", {}, { base: "src" })

    // cleans dist directory and compresses assets
    .webpackConfig({
      plugins: [new CleanWebpackPlugin(), new CompressionPlugin()],
    });
}
