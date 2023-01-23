import axios from 'axios';

export const getGames = async () => {
    const { data } = await axios.get(process.env.REACT_API_URL + `/games?populate=*&pagination[page]=1&pagination[pageSize]=10`, {
        headers: {
          Authorization: " bearer " + process.env.REACT_ACCESS_TOKEN,
        },
      });
      const res = data.data;

      if (data != null)
        return res;
    return [];
};

export const getPs4Games = async () => {
  const { data } = await axios.get(process.env.REACT_API_URL + `/games?populate=*&filters[plartform][$eq]=ps`, {
      headers: {
        Authorization: " bearer " + process.env.REACT_ACCESS_TOKEN,
      },
    });
    const res = data.data;

    if (data != null)
      return res;
  return [];
};

export const getXboxGames = async () => {  
  const { data } = await axios.get(process.env.REACT_API_URL + `/games?populate=*&filters[plartform][$eq]=xbox1`, {
      headers: {
        Authorization: " bearer " + process.env.REACT_ACCESS_TOKEN,
      },
    });
    const res = data.data;

    if (data != null)
      return res;
  return [];
};

export const getSwitchGames = async () => {
  const { data } = await axios.get(process.env.REACT_API_URL + `/games?populate=*&filters[plartform][$eq]=switch`, {
      headers: {
        Authorization: " bearer " + process.env.REACT_ACCESS_TOKEN,
      },
    });
    const res = data.data;

    if (data != null)
      return res;
  return [];
};