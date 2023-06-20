import haversine from 'haversine';

const getNearPlaces = (data, position, radius) => {
  return data.filter((place) => {
    const start = {
      latitude: position.lat,
      longitude: position.lng,
    };
    const end = {
      latitude: place.lat,
      longitude: place.lng,
    };

    const distance = haversine(start, end, { unit: 'meter' });

    return distance <= radius;
  });
};

export default getNearPlaces;
