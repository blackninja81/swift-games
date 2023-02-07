import axios from 'axios';
import endpoints from '../routes/Endpoints';

export const getHomeAccessories = async () => {
    const { data } = await axios.get(process.env.REACT_API_URL + `${endpoints.homeaccessories}`, {
        headers: {
          Authorization: " bearer " + process.env.REACT_ACCESS_TOKEN,
        },
      });
      const res = data.data;

      if (data != null)
        return res;
    return [];
};

export const getAccessories = async () => {
    const { data } = await axios.get(process.env.REACT_API_URL + `${endpoints.accessories}`, {
        headers: {
          Authorization: " bearer " + process.env.REACT_ACCESS_TOKEN,
        },
      });
      const res = data.data;
      console.log(res)

      if (data != null)
        return res;
    return [];
};