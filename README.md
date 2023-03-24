# cloudcasting-network-config-generator

This is a JavaScript code project that uses the Alpine.js framework for developing interactive applications. It contains the application settings, including network settings such as Ethernet and Wi-Fi, as well as GSM network connections and proxy settings. The init() function initializes the application, and the handleIsr() and handleAndroid() functions handle the settings related to different device types. The Alpine.data() function defines the data model, whose properties are the values of the settings. The render_config() function handles the display of the data by compiling the configuration file in the appropriate format.

## Getting started

```
git clone

npm install
```

## Developer env
***generate a /dist folder with a production build***

```
npm run dev or npm run watch (watching all files) 
```
base host and port: http://localhost:3000/

## Production env
***generate a /dist folder with a production build***

```
npm run prod 
```
## This porject uses them: 
- Laravel Mix is a clean layer on top of webpack to make the 80% use case laughably simple to execute. Most would agree that, though incredibly powerful, webpack ships with a steep learning curve. https://laravel-mix.com/docs/5.0/basic-example
    - BrowserSync: https://laravel-mix.com/docs/4.0/browsersync
    - BrowserSync plugin for Webpack: https://www.npmjs.com/package/browser-sync-webpack-plugin
    - webpack.mix.js: it contains the most important webpack calls that are responsible for the build part.
- Alpine.js: https://alpinejs.dev/start-here
- Tailwind: https://tailwindcss.com/docs/installation

## Push an existing Git repository

```
cd existing_repo

git remote add origin
git branch -M main
git push -uf origin main
```

## License
MIT
