import {postContent,session} from '../../config/utils';
export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const ERROR = 'ERROR';


export function register(values){
    return async (dispatch)=>{
        try {
            const user = await postContent({
                url : '/users/signup',
                data : {...values}
            });

            session.set("id",user.id);
            session.set("email",user.email);
            session.set("token",user.token);

            dispatch({
                type:REGISTER,
                payload : user
            });
            
        } catch ({message}) {
            dispatch({
                type : ERROR,
                payload : message
            });
        }
    }
}


export function login(values){
    return async (dispatch)=>{
        try {
            const user = await postContent({
                url : '/users/signin',
                data : {...values}
            });

            session.set("id",user.id);
            session.set("email",user.email);
            session.set("token",user.token);

            dispatch({
                type:LOGIN,
                payload : user
            });
            
        } catch ({message}) {
            dispatch({
                type : ERROR,
                payload : message
            });
        }
    }
}
                