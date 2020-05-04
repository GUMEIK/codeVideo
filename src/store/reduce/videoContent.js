import {changeContentType} from '../action/videoContent'
export default function(state = "test",action){
    if(action.type === changeContentType){
        return action.payload;
    }
    return state;
}