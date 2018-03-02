let myFilter = {};

myFilter.install = function (Vue) {
  // 日期
  Vue.filter("fullDate", val => {
    let date = new Date(val);
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}
    ${date.getHours()}:${date.getMinutes()}`;
  });
  // 千分化
  Vue.filter("formatCash", str => {
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
  })

};
export default myFilter;
