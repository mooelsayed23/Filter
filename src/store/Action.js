export function addToCart(product) {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
}
export function removeFromCart(product) {
  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  };
}

export function setCompany(data) {
  return {
    type: "SET_COMPANY",
    payload: data,
  };
}
export function setCategory(data) {
  return {
    type: "SET_CATEGORY",
    payload: data,
  };
}
export function setPrice(data) {
  return {
    type: "SET_PRICE",
    payload: data,
  };
}
export function setColor(data) {
  return {
    type: "SET_COLOR",
    payload: data,
  };
}
export function setTitle(data) {
  return {
    type: "SET_TITLE",
    payload: data,
  };
}
