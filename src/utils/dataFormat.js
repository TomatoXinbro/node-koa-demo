/**
 * 成功数据包裹
 */
const dataFormat = (code = 200, message, result = null) => {
  // 函数参数默认值应该放在最后
  return {
    code,
    message,
    result,
  };
};

module.exports = dataFormat;
