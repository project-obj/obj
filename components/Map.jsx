'use client';
import Script from 'next/script';

import React, { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';

const KakaoMap = () => {
  return (
    <div className="mt-[10vh] h-[80vh] w-screen">
      <Script
        strategy="beforeInteractive"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services,clusterer&autoload=false`}
      ></Script>
      <div className="mx-auto h-full w-11/12">
        <Map
          center={{ lat: 33.450701, lng: 126.570667 }}
          style={{ width: '100%', height: '100%' }}
          level={3}
        ></Map>
      </div>
    </div>
  );
};

export default KakaoMap;
