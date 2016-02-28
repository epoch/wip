
```

├── build
│   ├── bundle.js
│   └── index.html
├── dist
│   ├── bundle.js
│   └── index.html
├── package.json
├── src
│   ├── actions
│   │   └── index.js
│   ├── components
│   │   ├── about
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   ├── contact
│   │   │   └── index.js
│   │   ├── home
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   └── index.js
│   ├── containers
│   │   ├── app
│   │   │   └── index.js
│   │   ├── index.js
│   │   └── navTo
│   │       └── index.js
│   ├── index.html
│   ├── index.js
│   └── style.css
├── README.md
├── gulpfile.js
├── package.json
├── webpack.config.js
└── webpack.prod.config.js

```

- src - application code you edit during development
- build - during development, webpackDevServer bundle and run code in memory.
But we can also build to disk in this folder for browser to run instead.
- dist - optimized application code browser run for production
