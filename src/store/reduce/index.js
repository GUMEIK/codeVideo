import {videoModalReducer} from './video'
import videoContentReducer from './videoContent'
export default function reducer(state = {},action){
    const newState = {
        videoControl:videoModalReducer(state.videoControl,action),
        videoContent:videoContentReducer(state.videoContent,action)
    }
    return newState;
}