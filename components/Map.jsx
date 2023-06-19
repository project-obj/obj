'use client';
import React, { useRef, useState } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import SearchIcon from '@/components/svg/SearchIcon';
import PlaceMenu from '@/components/PlaceMenu';
import SearchResults from './SearchResults';
import useInput from '@/hooks/useInput';
import addBookmarkPlace from '@/utils/addBookmarkPlace';

const KakaoMap = () => {
  const mapRef = useRef();

  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [keyword, onChangeKeyword] = useInput('');
  const [isListOpen, setIsListOpen] = useState(true);

  const searchPlace = (e) => {
    e.preventDefault();
    setIsListOpen(true);

    if (!mapRef.current) {
      setMap(mapRef.current);
    }

    const { kakao } = window;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();

        const searched = data.map((place) => {
          bounds.extend(new kakao.maps.LatLng(place.y, place.x));
          return {
            position: {
              lat: place.y,
              lng: place.x,
            },
            content: place.place_name,
            ...place,
          };
        });

        setMarkers(searched);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        mapRef.current.setBounds(bounds);
      }
    });
  };

  return (
    <>
      <PlaceMenu />
      <div className="flex h-[80vh] w-screen">
        <div className="relative h-full w-full">
          <Map
            ref={mapRef}
            center={{ lat: 37.555677404758484, lng: 126.97167262147268 }}
            style={{ width: '100%', height: '100%' }}
            level={5}
          >
            <div className="max-h-1/2 max-w-1/3 absolute left-2 top-2 z-10">
              <div className="rounded-lg border border-mint/60 bg-white/60">
                <SmallLogo />
                <form
                  className={`${
                    !!markers.length && 'border-b'
                  } mx-auto flex items-center justify-around py-2`}
                  onSubmit={(e) => searchPlace(e, keyword)}
                >
                  <input
                    type="text"
                    value={keyword}
                    onChange={onChangeKeyword}
                    id="keyword"
                    className="border-b-1 mx-1 w-3/4 border-b border-gray/30 bg-white/50 px-1 outline-none"
                  />
                  <button
                    className="mx-1 flex w-1/5 items-center justify-center rounded border border-mint-em px-1 text-mint-em"
                    type="submit"
                  >
                    <SearchIcon />
                  </button>
                </form>
                {isListOpen && (
                  <SearchResults
                    markers={markers}
                    setInfo={setInfo}
                    setIsListOpen={setIsListOpen}
                  />
                )}
              </div>
            </div>
            {markers.map((marker) => (
              <>
                <MapMarker
                  key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                  position={marker.position}
                  image={{
                    src: '/img/marker.png',
                    size: {
                      width: 40,
                      height: 40,
                    },
                  }}
                  onClick={() => setInfo(marker)}
                  onMouseOver={() => setInfo(marker)}
                  onMouseOut={() => setInfo()}
                />
                {info && info.content === marker.content && (
                  <CustomOverlayMap
                    zIndex={20}
                    position={marker.position}
                    yAnchor={1.4}
                  >
                    <div className="px-auto my-1 flex h-full w-full flex-col rounded border border-mint-em bg-white py-2">
                      <h3 className="mx-auto p-2 text-center">
                        {marker.content}
                      </h3>
                      <p></p>
                      <button
                        className="mx-auto content-center rounded border border-mint px-2 py-1 text-mint md:hidden"
                        onClick={() =>
                          addBookmarkPlace(
                            marker.category_group_code,
                            marker.content,
                            marker.road_address_name,
                            marker.address_name,
                            marker.y,
                            marker.x,
                          )
                        }
                      >
                        등록
                      </button>
                    </div>
                  </CustomOverlayMap>
                )}
              </>
            ))}
          </Map>
        </div>
      </div>
    </>
  );
};

export default KakaoMap;
