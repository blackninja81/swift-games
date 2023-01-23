import axios from 'axios';
import endpoints from '../routes/Endpoints';

export const getBanner = async () => {
    const { data } = await axios.get(process.env.REACT_API_URL + `${endpoints.banner}`, {
        headers: {
          Authorization: " bearer " + process.env.REACT_ACCESS_TOKEN,
        },
      });
      const res = data.data;

      if (data != null)
        return res;
    return [];
};