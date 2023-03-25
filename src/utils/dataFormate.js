/**
 * 成功数据包裹
 * @param data
 * @returns
 */
const dataFormate = (data = "unknown", code = 200) => {
  return {
    code,
    data,
  };
};

module.exports = dataFormate;
