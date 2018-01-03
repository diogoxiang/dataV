/**
 * 瀑布流的插件
 * @author Diogo 2017年11月14日15:58:54
 * @version 0.0.1
 * 
 *   var waterfall = new Waterfall(
 *        { 
 *          containerSelector: ".wf-container", // 最外层的CLASS
 *          boxSelector:".wf-box"     // 单样式的宽度
 *          minBoxWidth: 200, //最小宽度
 *          minContainerWidth:320    // 外框最小宽度  
 *          columnsNum:1 // 配置列数 当配置指字列数的时候  minContainerWidth / minBoxWidth  配置项目不生效
 *        }); 
 * 
 *  use 
 *      waterfall.addBox(item)  // 添加新的item
 *      waterfall.compose(true)  // 刷新所有列表
 * 
 * 
 */
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root["dioWaterfall"] = factory();
  }
})(this, function() {
  "use strict";
  let dioWaterfll = function(opts) {
    // define property
    let minBoxWidth;
    // 设置默认值
    Object.defineProperty(this, "minBoxWidth", {
      get: function() {
        return minBoxWidth;
      },
      set: function(value) {
        if (value < 100) value = 100;
        if (value > 1000) value = 1000;

        minBoxWidth = value;
      }
    });
    // 初始化配置
    opts = opts || {};
    var containerSelector = opts.containerSelector || ".wf-container";
    var boxSelector = opts.boxSelector || ".wf-box";

    // init properties
    this.minBoxWidth = opts.minBoxWidth || 250;
    this.columns = [];
    this.container = document.querySelector(containerSelector);
    this.boxes = this.container
      ? Array.prototype.slice.call(this.container.querySelectorAll(boxSelector))
      : [];

    this.columnsNum = opts.columnsNum || 1;

    // 当没有设置最小宽度的时候
    this.minContainerWidth = opts.minContainerWidth || 320;

    // compose once in constructor
    this.compose();
    console.log("1");
    // handle the image or something which might change size after loaded
    // 赖加载 图片简易版
    let images = this.container.querySelectorAll("img"),
      that = this;
    let clr;
    for (var i = 0; i < images.length; i++) {
      let img = images[i];
      img.onload = function() {
        if (clr) clearTimeout(clr);
        clr = setTimeout(function() {
          // that.compose(true);
        }, 500);
      };
    }

    // 窗口发生变化重新编译
    window.addEventListener("resize", function() {
      that.compose();
    });
  };
  // compute the number of columns under current setting
  //  计算当前container 可以生成几个box
  dioWaterfll.prototype.computeNumberOfColumns = function() {
    // var num = Math.floor(this.container.clientWidth / this.minBoxWidth);
    let num = Math.floor(this.minContainerWidth / this.minBoxWidth);
    num = num || 1; // at least one column
    return num;
  };

  // init enough columns and set the width
  dioWaterfll.prototype.initColumns = function(num) {
    if (num > 0) {
      // create column div
      this.columns = [];
      var width = 100 / num + "%";
      while (num--) {
        var column = document.createElement("div");
        column.className = "wf-column";
        column.style.width = width;
        this.columns.push(column);
        this.container.appendChild(column);
      }
    }
  };

  // get the index of shortest column
  // 获取最短的 column
  dioWaterfll.prototype.getMinHeightIndex = function() {
    if (this.columns && this.columns.length > 0) {
      var min = this.columns[0].clientHeight,
        index = 0;
      for (var i = 1; i < this.columns.length; i++) {
        var columnElem = this.columns[i];
        if (columnElem.clientHeight < min) {
          min = columnElem.clientHeight;
          index = i;
        }
      }
      return index;
    } else return -1;
  };

  // get the index of highset column
  // 获取最高的 column
  dioWaterfll.prototype.getHighestIndex = function() {
    if (this.columns && this.columns.length > 0) {
      var max = this.columns[0].clientHeight,
        index = 0;
      for (var i = 1; i < this.columns.length; i++) {
        var columnElem = this.columns[i];
        if (columnElem.clientHeight > max) {
          max = columnElem.clientHeight;
          index = i;
        }
      }
      return index;
    } else return -1;
  };

  // compose core
  // 构建 core
  dioWaterfll.prototype.compose = function(force) {
    let num;
    console.log(new Date().getTime());
    // 修改配置列数
    if (this.columnsNum == 1) {
      num = this.computeNumberOfColumns();
    } else {
      num = this.columnsNum;
    }

    var cols = this.columns.length;

    if (force || num != cols) {
      // remove old column
      for (var i = 0; i < this.columns.length; i++) {
        var columnElem = this.columns[i];
        this.container.removeChild(columnElem);
      }

      // init new column
      this.initColumns(num);

      // compose
      for (var i = 0, l = this.boxes.length; i < l; i++) {
        var box = this.boxes[i];
        this.addBox(box);
      }
    }
  };

  // add a new box to grid
  // 添加新的item
  dioWaterfll.prototype.addBox = function(elem) {
    // push if new box
    if (this.boxes.indexOf(elem) < 0) this.boxes.push(elem);

    var columnIndex = this.getMinHeightIndex();
    if (columnIndex > -1) {
      var column = this.columns[columnIndex];
      column.appendChild(elem);
    }
  };

  return dioWaterfll;
});
