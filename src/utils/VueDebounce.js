// 封装防抖方法 接收两个参数方法和间隔时间
function VueDebounce(fnName, time) {
  let timeout = null;
  return function(...args) {
    console.log(11111);
    if (timeout) clearTimeout(timeout);
    if (!timeout) {
      timeout = setTimeout(() => {
        fnName.call(this, args);
      }, time);
    }
  };
}

export default VueDebounce;
