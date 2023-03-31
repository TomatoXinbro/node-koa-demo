/**
 * 成功数据包裹
 */
const dataFormate = (code = 200, message = "成功", result = null) => {
  return {
    code,
    message,
    result,
  };
};

module.exports = dataFormate;
