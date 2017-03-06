System.registerDynamic("npm:systemjs-hot-reloader@1.1.0.json", [], true, function() {
  return {
    "main": "dist/index.js",
    "map": {
      "./dist/index.js": {
        "production": "./lib/production.js"
      }
    }
  };
});

System.registerDynamic("npm:systemjs-hot-reloader@1.1.0/lib/production.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = function () {};
});
//# sourceMappingURL=bundle.js.map