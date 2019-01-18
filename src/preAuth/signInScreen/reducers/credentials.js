import {DELETE_CREDENTIALS, SET_CREDENTIALS} from '../actionTypes';
import NULL_CREDENTIALS from '../nullCredentials';

export default (prevState = NULL_CREDENTIALS, action) => 
{
    switch (action.type)
    {
        case DELETE_CREDENTIALS:
            return NULL_CREDENTIALS;

        case SET_CREDENTIALS:
            return action.payload;
        
        default:
            return prevState;
    }
};