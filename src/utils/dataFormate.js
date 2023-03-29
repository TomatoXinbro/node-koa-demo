/**
 * 成功数据包裹
 * @param data
 * @returns
 */
const dataFormate = (code = 200, message = "成功", data = null) => {
  return {
    code,
    message,
    data,
  };
};

module.exports = dataFormate;
