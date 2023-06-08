import { combineReducers } from "redux";
// import { UserName , FetchCategories,UserRole , Register,CategoryData,CategoryUpdate } from "./UserDetails";
import { Categories } from "./CategoriesReducer";
import { Users } from "./UserReducer";
import Products from "./ProductReducer.js";
import { cartManager } from "./CartReducer";
import { Supplier } from "./SupplierReducer";
const rootReducer = combineReducers({
  Categories,
  Users,
  Products,
  cartManager,
  Supplier,
});

export default rootReducer;
