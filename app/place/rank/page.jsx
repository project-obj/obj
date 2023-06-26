'use client';
import React, { useEffect, useState } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

import axios from 'axios';

import PlaceList from '@/components/PlaceList';

const page = () => {
  const [hotPlaces, setHotPlaces] = useState([]);
  const [mapCenter, setMapCenter] = useState({
    lat: 37.555677404758484,
    lng: 126.97167262147268,
  });
  const [markerLocation, setMarkerLocation] = useState();
  const [selectedPlace, setSelectedPlace] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER}/place/rank`)
      .then((res) => res.data)
      .then((data) => setHotPlaces(data));
  }, []);

  return (
    <div className="h-[90vh] w-screen">
      <div className="mx-auto flex h-full items-start justify-around">
        <div className=" mt-10 flex w-[300px] flex-col items-center justify-start">
          {hotPlaces.map((place) => (
            <PlaceList
              key={place.place_name}
              name={place.place_name}
              address={place.address}
              roadAddress={place.roadAddress}
              lat={place.lat}
              lng={place.lng}
              cnt={place.cnt}
              onClick={() => {
                setMapCenter({ lat: place.lat, lng: place.lng });
                setMarkerLocation({ lat: place.lat, lng: place.lng });
                setSelectedPlace({
                  name: place.place_name,
                  address: place.roadAddress,
                });
              }}
            />
          ))}
        </div>

        <div className="hidden h-[90vh] w-full md:block">
          <Map
            center={mapCenter}
            style={{ width: '100%', height: '100%' }}
            level={5}
          >
            {markerLocation && (
              <>
                <MapMarker
                  position={markerLocation}
                  image={{
                    src: '/img/marker.png',
                    size: {
                      width: 40,
                      height: 40,
                    },
                  }}
                />
                <CustomOverlayMap
                  zIndex={30}
                  position={markerLocation}
                  yAnchor={1.5}
                >
                  <div className="rounded border border-mint-em bg-white py-2 px-2 text-center">
                    <div className="flex flex-col">
                      <h2 className="text-extrabold">{selectedPlace.name}</h2>
                      <p>{selectedPlace.address}</p>
                    </div>
                  </div>
                </CustomOverlayMap>
              </>
            )}
          </Map>
        </div>
      </div>
    </div>
  );
};

export default page;
