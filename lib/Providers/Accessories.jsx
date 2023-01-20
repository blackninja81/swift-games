import {endpoints} from '../routes/Endpoints';
import axios from 'axios';

export const getAccessories = async () => {
    try{
    const response = await fetch('http://localhost:1337/api/accessories');
    const data = await response.json()
    console.log(data)
}catch(err){
    console.log(err)
}
}