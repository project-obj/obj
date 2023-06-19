import axios from 'axios';

const addBookmarkPlace = async (code, name, roadAddress, address, lat, lng) => {
  await axios({
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_SERVER}/place/add`,
    data: {
      category_id: code,
      place_name: name,
      address: JSON.stringify({
        roadAddress,
        address,
        lat,
        lng,
      }),
    },
  });
};

export default addBookmarkPlace;
