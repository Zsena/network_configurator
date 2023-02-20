// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/js/main.js', 'dist/js').setPublicPath('dist/js');