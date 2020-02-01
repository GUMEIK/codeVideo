import {showModalType,hideModalType,urlSourceType} from '../action/video'

export function videoModalReducer(state = {
    isShowModal:false,
    url:"fjkdfjkjf"
},action){
    if(action.type === showModalType){
        return {...state,isShowModal:true};
    }else if(action.type === hideModalType){
        return {...state,isShowModal:false}
    }else if(action.type === urlSourceType){
        return {isShowModal:true,url:action.payload}
    }
    return state;
}