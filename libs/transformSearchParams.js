export const transformSearchParams = (data = {}) => {
  let { limit } = data;

  if (limit === undefined) {
    limit = 8;
  }

  let newObj = {};

  newObj["limit"] = limit;

  for (const key of Object.keys(data)) {
    if (key === "page") {
      if (data[key] < 1 || isNaN(data[key])) {
        newObj["offset"] = 0;
      } else {
        newObj["offset"] = (data[key] - 1) * limit;
      }
      continue;
    }

    if (data[key] === null) {
      continue;
    }

    newObj[key] = data[key];
  }

  return newObj;
};
