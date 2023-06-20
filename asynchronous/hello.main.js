"use strict";

// 这里对模块对象属性进行赋值
(self["webpackChunk_5_bundle"] = self["webpackChunk_5_bundle"] || []).push([["hello"], {
  "./asynchronous/hello.js": (unusedWebpackModule, webpackExports, webpackRequire) => {

    // 声明或者说表示当前的模块原来是一个es module
    webpackRequire.r(webpackExports);

    // 赋值模块默认导出属性default
    webpackRequire.d(webpackExports, {
      "default": () => webpackDefaultExport
    });
    const webpackDefaultExport = 'hello';
  }
}]);