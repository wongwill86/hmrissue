SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "hmrissue/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.21"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "hmrissue": {
      "main": "hmrissue.js",
      "format": "esm",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "systemjs-hot-reloader": "npm:systemjs-hot-reloader@1.1.0"
  },
  packages: {
    "npm:systemjs-hot-reloader@1.1.0": {
      "map": {
        "systemjs-hmr": "npm:systemjs-hmr@2.0.8"
      }
    }
  }
});
