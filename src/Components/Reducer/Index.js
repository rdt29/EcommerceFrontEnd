import { combineReducers } from "redux";
import { UserName , FetchCategories,UserRole , Register } from "./UserDetails";

const rootReducer = combineReducers({
    UserName,
    UserRole,
    FetchCategories,
    Register,
})

export default rootReducer;