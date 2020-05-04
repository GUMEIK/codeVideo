import {createStore} from 'redux'
import reducer from './reduce'
import {createChangeContentAction} from "../store/action/videoContent"
export const store = createStore(reducer);
// console.log(store.getState());
// store.dispatch(createChangeContentAction("test"));
// console.log(store.getState())
// store.dispatch(createUrlSourceAction("http://www.msse.vip/video/test.mp4"))
// console.log(store.getState());

// store.dispatch({
//     type:"show"
// })
// console.log(store.getState());
// store.dispatch({
//     type:"hide"
// })