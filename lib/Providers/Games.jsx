import endpoints from '../routes/Endpoints'
import { makeRequest } from '../MakeRequest';

export const getGames = async () => {
    const { data } = await makeRequest.get(process.env.REACT_API_URL + `${endpoints.homegames}`, {
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
  const { data } = await makeRequest.get(process.env.REACT_API_URL + `${endpoints.ps4}`, {
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
  const { data } = await makeRequest.get(process.env.REACT_API_URL + `${endpoints.xbox}`, {
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
  const { data } = await makeRequest.get(process.env.REACT_API_URL + `${endpoints.switch}`, {
      headers: {
        Authorization: " bearer " + process.env.REACT_ACCESS_TOKEN,
      },
    });
    const res = data.data;

    if (data != null)
      return res;
  return [];
};