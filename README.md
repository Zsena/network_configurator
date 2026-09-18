# Network Configuration Generator

Interactive network configuration generator built with **Alpine.js**, **Tailwind CSS** and **Laravel Mix/Webpack**.

The application provides a UI for configuring device/network settings and renders the selected values into the required configuration format.

## What it handles

- Ethernet configuration
- Wi-Fi settings
- GSM/mobile network settings
- Proxy configuration
- Device-specific options
- Interactive configuration preview/output

## Tech stack

- Alpine.js
- Tailwind CSS
- JavaScript
- EJS
- Laravel Mix
- Webpack
- BrowserSync

## Getting started

```bash
git clone https://github.com/Zsena/network_configurator.git
cd network_configurator
npm install
```

### Development

```bash
npm run dev
```

or start the watcher:

```bash
npm run watch
```

The default development server is available at:

```text
http://localhost:3000/
```

### Production build

```bash
npm run prod
```

The build process generates the production output in `dist/`.

## Structure

```text
src/
├── css/
├── js/
│   └── main.js
├── index.ejs
├── favicon.ico
└── favicon.svg
```

## License

MIT
