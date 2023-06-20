(() => {
  var webpackModules = {
    "./src1/title.js": (unusedWebpackModule, webpackExports, webpackRequire) => {
      "use strict";
      // 声明或者说表示当前的模块原来是一个es module
      webpackRequire.r(webpackExports);

      // 这里给webpackExports赋值属性，属性是引用可以动态更新
      webpackRequire.d(webpackExports, {
        age: () => age,
        "default": () => webpackDefaultExport
      });

      // 默认导出
      const webpackDefaultExport = name = 'title_name';

      // 命名导出
      const age = 'title_age';
    }
  };

  // 模块缓存对象
  var webpackModuleCache = {};

  // 核心方法
  function webpackRequire(moduleId) {
    var cachedModule = webpackModuleCache[moduleId];

    // 使用缓存模块
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }

    // 创建缓存模块
    var module = webpackModuleCache[moduleId] = {
      exports: {}
    };

    // 给模块对象module或者module.exports赋值
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
    let title = webpackRequire("./src1/title.js");
    console.log(title.name);
    console.log(title.age);
  })();

})();