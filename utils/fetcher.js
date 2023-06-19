import Cookies from 'js-cookie';

const fetcher = () => {
  if (Cookies.get('token') && Cookies.get('name')) {
    return Cookies.get('name');
  }

  return null;
};

export default fetcher;
