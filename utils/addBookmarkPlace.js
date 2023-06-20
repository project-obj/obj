import axios from 'axios';
import Cookies from 'js-cookie';

const addBookmarkPlace = async (code, name, roadAddress, address, lat, lng) => {
  await axios({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token: `${Cookies.get('token')}`,
    },
    url: `${process.env.NEXT_PUBLIC_SERVER}/place/add`,
    data: {
      userid: Cookies.get('userid'),
      category_id: code,
      place_name: name,
      address,
      roadAddress,
      lat,
      lng,
    },
    withCredentials: true,
  });
};

export default addBookmarkPlace;
