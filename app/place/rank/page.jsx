'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

import axios from 'axios';

import PlaceList from '@/components/PlaceList';

const page = () => {
  const mapRef = useRef();
  const [hotPlaces, setHotPlaces] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER}/place/rank`)
      .then((res) => res.data)
      .then((data) => setHotPlaces(data));
  }, []);

  console.log(hotPlaces);
  return (
    <div className="h-[90vh] w-screen">
      <div className="mx-auto flex h-full items-start justify-around">
        <div className=" mt-10 flex w-[300px] flex-col items-center justify-start">
          {hotPlaces.map((place) => (
            <PlaceList
              name={place.place_name}
              address={place.address}
              roadAddress={place.roadAddress}
              lat={place.lat}
              lng={place.lng}
              cnt={place.cnt}
            />
          ))}
        </div>

        <div className="hidden h-[90vh] w-full md:block">
          <Map
            ref={mapRef}
            center={{ lat: 37.555677404758484, lng: 126.97167262147268 }}
            style={{ width: '100%', height: '100%' }}
            level={5}
          ></Map>
        </div>
      </div>
    </div>
  );
};

export default page;
