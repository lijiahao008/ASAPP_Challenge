export const mapObjectToArray = (object) => {
  return Object.keys(object).map((id) => (object[id]))
};
