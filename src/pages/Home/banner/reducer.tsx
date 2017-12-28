import {INCREMENT} from "./actions";
/**
 * 初始化state
 */
const initState = {
    count: 0
}

export default function reducer(state = initState, action){
    switch(action.type){
        case INCREMENT: return {}
    }
}