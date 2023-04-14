/**
 * 成功数据包裹
 */
const dataFormat = (code = 200, message = '成功~', result = null) => {
  // 函数参数默认值应该放在最后，或者传入时传undefined
  return {
    code,
    message,
    result,
  };
};

module.exports = dataFormat;
