import {create} from 'apisauce';

const loginApi = ({...props}, url) => {
  const api = create({
    baseURL: url,
    headers: {
      'Content-type': 'application/json',
      'Cache-Control': 'no-cache',
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    },
  });
  const postLoginRequest = async () => {
    return await api.post<any>(url, {
      ...props,
    });
  };

  return {postLoginRequest};
};

const getData = (url: string, headers) => {
  const api = create({
    baseURL: url,
    headers: headers,
  });

  const getNewsRequest = async () => {
    return await api.get<any>(url);
  };

  const getCurrentNewsRequest = async (id: string) => {
    return await api.get<any>(url + '/' + id);
  };

  return {getNewsRequest, getCurrentNewsRequest};
};

export {loginApi, getData};
