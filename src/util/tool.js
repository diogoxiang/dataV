/**
 * 判断是否为空
 * @param {*} v
 */
export const isEmpty = v => {
  if (!v) return true;
  if (Array.isArray(v)) return !v.length;
  if (typeof v === "object") return !Object.keys(v).length;

  return false;
};

/**
 * 判断是否   不为空
 * @param {*} v
 */
export const isNotEmpty = v => {
  return !isEmpty(v);
};

/**
*   MDZ 版  频率控制, 节流
* @param {*} type 
* @param {*} name 
* @param {*} obj   
* @example
*  throttle("resize", "optimizedResize");
*  window.addEventListener("optimizedResize", function() {
        console.log("Resource conscious resize callback!");
      });
*/
export const throttle = (type, name, obj) => {
  obj = obj || window;
  var running = false;
  var func = function () {
    if (running) {
      return;
    }
    running = true;
    requestAnimationFrame(function () {
      obj.dispatchEvent(new CustomEvent(name));
      running = false;
    });
  };
  /* init - you can init any event */
  obj.addEventListener(type, func);
};

/**
 * 空闲时间必须大于或等于 wait，func 才会执行
 * @param  {function} fn        传入函数
 * @param  {number}   wait        表示时间窗口的间隔
 */
export const debounce = (fn, wait) => {
  var timer = null;
  return function () {
    var context = this;
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, wait);
  };
};



/**
 *  保留两位小数 
    功能：将浮点数四舍五入，取小数点后2位 
 * @param  {number}   x        数据
 */
export const toDecimal = (x) => {
  var f = parseFloat(x);
  if (isNaN(f)) {
    return;
  }
  f = Math.round(x * 100) / 100;
  return f;
}

/**
 * 千分位格式化
 * 功能: 千分位 "121,122"
 * @param  {number}   str        
 * @return  {arr}    返回数据
 */

export const formatCash = (str) => {
  var arr = [];
  var counter = 0;
  str = (str || 0).toString().split("");
  for (var i = str.length - 1; i >= 0; i--) {
    counter++;
    arr.unshift(str[i]);
    if (!(counter % 3) && i !== 0) {
      arr.unshift(",");
    }
  }
  return arr.join("");
}





export default {
  isEmpty,
  isNotEmpty,
  throttle,
  debounce,
  toDecimal,
  formatCash
};
