import tool from "./../tool";
const doc = document;

/**
 * 监听{F11} 并执行相应的方法
 * @param  {enterFunc} 进入全屏 进行的 function
 * @param  {outFunc}   退出全屏 function
 *
 */
const listenKeyDown = (enterFunc, outFunc) => {
  console.log(doc);
  //   doc.addEventListener("keydown", function(e) {
  //     // console.log(e);
  //     var e = event || window.event || arguments.callee.caller.arguments[0];
  //     //捕捉F11键盘动作
  //     if (e && e.keyCode == 122) {
  //       //阻止F11默认动作
  //       e.preventDefault();
  //       var el = document.documentElement;
  //       //定义不同浏览器的全屏API
  //       var rfs =
  //         el.requestFullScreen ||
  //         el.webkitRequestFullScreen ||
  //         el.mozRequestFullScreen ||
  //         el.msRequestFullScreen;
  //       //执行全屏
  //       if (typeof rfs != "undefined" && rfs) {
  //         rfs.call(el);
  //       } else if (typeof window.ActiveXObject != "undefined") {
  //         var wscript = new ActiveXObject("WScript.Shell");
  //         if (wscript != null) {
  //           wscript.SendKeys("{F11}");
  //         }
  //       }
  //       //监听不同浏览器的全屏事件，并件执行相应的代码 ,这里只真对Chrome
  //       document.addEventListener(
  //         "webkitfullscreenchange",
  //         function() {
  //           //
  //           if (document.webkitIsFullScreen) {
  //             //全屏后要执行的代码
  //             console.log("webkitfullscreenchange enter");
  //           } else {
  //             //退出全屏后执行的代码
  //             console.log("webkitfullscreenchange out");
  //           }
  //         },
  //         false
  //       );
  //     }
  //   });
};

/**
 * 监听视图变化 并执行相应的方法
 * @param  {enterFunc} 进入全屏 进行的 function
 * @param  {outFunc}   退出全屏 function
 *
 */
const listenResize = (enterFunc, outFunc) => {
  console.log("监听视图变化");
  console.log(tool);
};

export default {
  listenKeyDown,
  listenResize
};
