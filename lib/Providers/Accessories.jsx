import axios from 'axios';

export const getHomeAccessories = async () => {
    const { data } = await axios.get(process.env.REACT_API_URL + `/accessories?populate=*&pagination[page]=1&pagination[pageSize]=10`, {
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
    const { data } = await axios.get(process.env.REACT_API_URL + `/accessories?populate=*`, {
        headers: {
          Authorization: " bearer " + process.env.REACT_ACCESS_TOKEN,
        },
      });
      const res = data.data;

      if (data != null)
        return res;
    return [];
};