(() => {

  "use strict";
  var webpackModules = {
    "./src2/title.js": (unusedWebpackModule, webpackExports, webpackRequire) => {
      // 给每一个文件声明或者说表示当前的模块原来是一个es module
      webpackRequire.r(webpackExports);

      webpackRequire.d(webpackExports, {
        age: () => age,
        "default": () => webpackDefaultExport
      });

      const webpackDefaultExport = name = 'title_name';

      const age = 'title_age';
    }
  };

  // 模块缓存对象
  var webpackModuleCache = {};
  
  // 核心
  function webpackRequire(moduleId) {
    // 使用缓存
    var cachedModule = webpackModuleCache[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }

    // 创建唯一模块缓存对象
    var module = webpackModuleCache[moduleId] = {
      exports: {}
    };

    // 加载文件内容，给module或者module.exports赋值
    webpackModules[moduleId](module, module.exports, webpackRequire);

    return module.exports;
  }

  (() => {
    webpackRequire.d = (exports, definition) => {
      for (var key in definition) {
        if (webpackRequire.o(definition, key) && !webpackRequire.o(exports, key)) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
        }
      }
    };
  })();

  (() => {
    webpackRequire.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  (() => {
    webpackRequire.r = exports => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
      }
      Object.defineProperty(exports, 'esmodule', {
        value: true
      });
    };
  })();

  var webpackExports = {};

  (() => {
    // 声明或者说表示当前的模块原来是一个es module
    webpackRequire.r(webpackExports);

    // 加载模块内容
    var _titlewebpackImportedModule0 = webpackRequire("./src2/title.js");

    console.log(_titlewebpackImportedModule0["default"]);
    console.log(_titlewebpackImportedModule0.age);
  })();

})();