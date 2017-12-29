import { combineReducers } from "redux";
import banner from '../pages/Home/banner/reducer';
// import userInfo from 'reducers/userInfo';
/**
 * 整合reducers
 */
export default combineReducers({
    banner,
    }
)