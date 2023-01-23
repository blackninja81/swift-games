import axios from 'axios';

export const getBanner = async () => {
    const { data } = await axios.get(process.env.REACT_API_URL + `/banners?populate=*&pagination[page]=1&pagination[pageSize]=10`, {
        headers: {
          Authorization: " bearer " + process.env.REACT_ACCESS_TOKEN,
        },
      });
      const res = data.data;

      if (data != null)
        return res;
    return [];
};