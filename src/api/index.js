import axios from 'axios'

const url  = 'http://sisma.online:4001/'


export const getDeviceById = (deviceId) =>axios.get(url+'device/'+deviceId)
export const getAllDevice= () =>axios.get(url)