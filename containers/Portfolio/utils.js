export const getElement = (id, data) => {
  return data.find((el) => {
    return el.id == id;
  });
};
