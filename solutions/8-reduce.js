// BEGIN
const groupBy = (collect, prop) => {
  return collect.reduce((acc, item) => {
    const key = item[prop];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
};

export default groupBy;
// END