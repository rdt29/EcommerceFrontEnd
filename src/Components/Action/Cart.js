export const addCartItems = (data)=>{
  return {
    type:"ADD_CART_ITEMS",
    payload :data
  }
}
export const removeCartItems = (data)=>{
  return {
    type:"REMOVE_CART_ITEMS",
    payload :data
  }
}