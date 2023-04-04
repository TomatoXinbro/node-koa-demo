/**
 * 成功数据包裹
 */
const dataFormat = (code = 200, message = '成功', result = null) => {
  return {
    code,
    message,
    result,
  };
};

module.exports = dataFormat;
