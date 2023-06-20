(() => {
  // key是模块ID，也就是模块相对于相前根目录的相对路径
  var webpackModules = {
    "./src/title.js": (unusedWebpackModule, exports) => {
      // 这里可以看到，导出的是基本数据类型，不是引用，所以修改后是无法动态更新
      exports.name = "title_name";
      exports.age = "title_age";
    },
  };

  // 模块缓存可用于第二次加载模块时加速加载过程。
  var webpackModuleCache = {};

  function webpackRequire(moduleId) {
    // 模块缓存
    var cachedModule = webpackModuleCache[moduleId];

    // 判断是否使用缓存
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }

    // 创建唯一缓存对象，用于下载加载使用
    var module = (webpackModuleCache[moduleId] = {
      exports: {},
    });

    // 调用模块文件，给module或者module.exports赋值
    webpackModules[moduleId](module, module.exports, webpackRequire);
    
    return module.exports;
  }

  var webpackExports = {};

  // 自调用，用于加载模块的核心方法
  (() => {
    let title = webpackRequire("./src/title.js");
    console.log(title.name);
    console.log(title.age);
  })();
})();
