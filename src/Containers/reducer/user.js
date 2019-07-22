import {REGISTER,LOGIN,ERROR} from '../action/user';

const initState={
    user : null,
    error : null,
    loading : true
};


export default (state=initState,{type,payload})=>{
    switch(type){
        case REGISTER:
            return {
                ...initState,
                user : payload
            };
        case LOGIN: 
            return {
                ...initState,
                user : payload
            };

        case ERROR:
            return {
                ...initState,
                error: payload
            };
        
        default:
            return state;
    }
}