import {videoModalReducer} from './video'
export default function reducer(state = {},action){
    const newState = {
        videoControl:videoModalReducer(state.isShowModal,action)
    }
    return newState;
}