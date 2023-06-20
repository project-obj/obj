'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Map, MapMarker, CustomOverlayMap, useMap } from 'react-kakao-maps-sdk';
import Cookies from 'js-cookie';
import axios from 'axios';
import useBookmark from '@/hooks/useBookmark';
import useCurrentUser from '@/hooks/useCurrentUser';

const page = ({ params }) => {
  const { userData } = useCurrentUser;
  const [myData, setMydata] = useState([]);
  const { mutate } = useBookmark();
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER}/user/${params.userid}`, {
        headers: {
          'Content-Type': 'application/json',
          token: `${Cookies.get('token')}`,
        },
        withCredentials: true,
      })
      .then((res) => res.data.Places)
      .then((places) => {
        setMydata([...places]);
      });
  }, []);

  useEffect(() => {
    console.log(myData);
  }, [myData]);

  const mapRef = useRef();

  const EventMarkerContainer = ({ name, position, content }) => {
    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);

    return (
      <MapMarker
        position={position} // 마커를 표시할 위치
        onClick={(marker) => map.panTo(marker.getPosition())}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        {isVisible && content}
      </MapMarker>
    );
  };

  return (
    <div className="flex h-[80vh] w-screen">
      <div className="relative h-full w-full">
        <Map
          ref={mapRef}
          center={{ lat: 37.555677404758484, lng: 126.97167262147268 }}
          style={{ width: '100%', height: '100%' }}
          level={5}
        >
          {myData.map((value) => (
            <EventMarkerContainer
              key={`EventMarkerContainer-${value.lat}-${value.lng}`}
              position={{
                lat: value.lat,
                lng: value.lng,
              }}
              content={value.name}
            />
          ))}
        </Map>
      </div>
    </div>
  );
};

export default page;
