import { cookies } from 'next/headers';

const getCookie = () => {
  const cookieStore = cookies();
  if (cookieStore.has('name')) {
    const name = cookieStore.get('name').value;
    return name;
  }
};

export default getCookie;
