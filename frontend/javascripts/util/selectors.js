export const mapObjectToArray = (object) => {
  return Object.keys(object).map((id) => (object[id]))
};

export const getObject = (object) => {
  return object[Object.keys(object)[0]]
};
