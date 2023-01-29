import * as api from '../api'
import { FETCH, FETCH_ALL } from './types';


export const getDevices = () =>async (dispatch) =>{
    const {data} = await api.getAllDevice();
    console.log(data)
    dispatch({type: FETCH_ALL ,payload:data}); 
}


export const getById =(id) =>async (dispatch) =>{
    try {
        
        const { data } = await api.getDeviceById( id);
        dispatch({ type: FETCH, payload: data });
      } catch (err) {
        console.log(err);
      }
}