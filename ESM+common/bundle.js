(() => {
  var webpackModules = {
    "./ESM+common/title.js": module => {
      module.exports = {
        name: "title_name",
        age: "title_age"
      };
    }
  };

  var webpackModuleCache = {};

  function webpackRequire(moduleId) {
    // 缓存
    var cachedModule = webpackModuleCache[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }

    // 创建缓存对象
    var module = webpackModuleCache[moduleId] = {
      exports: {}
    };

    // 给模块对象赋值
    webpackModules[moduleId](module, module.exports, webpackRequire);

    return module.exports;
  }

  (() => {
    // 如果原来title是es module,取default属性，如果原来title是common.js，那就取exports本身
    webpackRequire.n = module => {
      var getter = module && module.esmodule ? () => module['default'] : () => module;
      webpackRequire.d(getter, {
        a: getter
      });
      return getter;
    };
  })();

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
    "use strict";

    // 声明或者说表示当前的模块原来是一个es module
    webpackRequire.r(webpackExports);

    // 命名导出处理
    var _titlewebpackImportedModule0 = webpackRequire("./ESM+common/title.js");

    // 默认导出，添加default属性，其实就是module.exports
    var _titlewebpackImportedModule0_Default = webpackRequire.n(_titlewebpackImportedModule0);

    console.log(_titlewebpackImportedModule0_Default());

    console.log(_titlewebpackImportedModule0.age);
  })();
})();