const all = {
  cartItem: [],
  company: [],
  category: "",
  price: "",
  color: "",
  title: "",
};

export default function Myredux(state = all, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItem: state.cartItem.filter((item) => item.id !== action.payload),
      };
    case "SET_COMPANY":
      return {
        ...state,
        company: action.payload,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "SET_PRICE":
      return {
        ...state,
        price: action.payload,
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.payload,
      };
    case "SET_TITLE":
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
}
