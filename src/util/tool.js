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
  var func = function() {
    if (running) {
      return;
    }
    running = true;
    requestAnimationFrame(function() {
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
  return function() {
    var context = this;
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, wait);
  };
};

export default {
  isEmpty,
  isNotEmpty,
  throttle,
  debounce
};
