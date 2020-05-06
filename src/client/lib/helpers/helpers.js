export const mapArrayToObjectByKey = (data, key) => {
  if (Array.isArray(data)) {
    const obj = {};
    data.forEach((item) => {
      obj[item[key]] = item;
    });
    return obj;
  } else {
    return data;
  }
};

export const sortArrayByKey = (arr, key) => {
  return arr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
};
