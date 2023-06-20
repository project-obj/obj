import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import haversine from 'haversine';

const seoulSubwayStations = [
  {
    name: '가락시장',

    position: { lat: 37.492522, lng: 127.118234 },
  },
  { name: '종로3가', position: { lat: 37.571607, lng: 126.991806 } },
  { name: '오금', position: { lat: 37.502162, lng: 127.128111 } },
  { name: '동대문', position: { lat: 37.57142, lng: 127.009745 } },
  {
    name: '동대문역사문화공원',

    position: { lat: 37.565138, lng: 127.007896 },
  },
  { name: '충무로', position: { lat: 37.561243, lng: 126.99428 } },
  { name: '서울', position: { lat: 37.554648, lng: 126.972559 } },
  { name: '신도림', position: { lat: 37.508725, lng: 126.891295 } },
  { name: '이촌', position: { lat: 37.522272, lng: 126.974345 } },
  { name: '왕십리', position: { lat: 37.561533, lng: 127.037732 } },
  { name: '시청', position: { lat: 37.564718, lng: 126.977108 } },
  { name: '교대', position: { lat: 37.493415, lng: 127.01408 } },
  { name: '신설동', position: { lat: 37.575297, lng: 127.025087 } },
  { name: '강변', position: { lat: 37.535095, lng: 127.094681 } },
  { name: '까치산', position: { lat: 37.531768, lng: 126.846683 } },
  {
    name: '을지로3가',

    position: { lat: 37.566295, lng: 126.99191 },
  },
  {
    name: '홍대입구',

    position: { lat: 37.557192, lng: 126.925381 },
  },
  { name: '광운대', position: { lat: 37.623632, lng: 127.061835 } },
  { name: '상봉', position: { lat: 37.596362, lng: 127.085032 } },
  { name: '망우', position: { lat: 37.59955, lng: 127.091909 } },
  {
    name: '영등포구청',

    position: { lat: 37.52497, lng: 126.895951 },
  },
  { name: '신길', position: { lat: 37.517122, lng: 126.917169 } },
  {
    name: '을지로4가',

    position: { lat: 37.566941, lng: 126.998079 },
  },
  { name: '합정', position: { lat: 37.549463, lng: 126.913739 } },
  { name: '공덕', position: { lat: 37.544018, lng: 126.951592 } },
  { name: '삼각지', position: { lat: 37.534777, lng: 126.97311 } },
  { name: '약수', position: { lat: 37.55434, lng: 127.010655 } },
  { name: '신당', position: { lat: 37.565972, lng: 127.01782 } },
  { name: '동묘앞', position: { lat: 37.572627, lng: 127.016429 } },
  { name: '석계', position: { lat: 37.614805, lng: 127.065851 } },
  { name: '도봉산', position: { lat: 37.689313, lng: 127.046222 } },
  { name: '불광', position: { lat: 37.610469, lng: 126.929887 } },
  { name: '연신내', position: { lat: 37.619001, lng: 126.921008 } },
  { name: '금정', position: { lat: 37.372221, lng: 126.943429 } },
  { name: '수원', position: { lat: 37.265974, lng: 126.999874 } },
  { name: '원인재', position: { lat: 37.412603, lng: 126.687389 } },
  { name: '회기', position: { lat: 37.58946, lng: 127.057583 } },
  { name: '대곡', position: { lat: 37.631626, lng: 126.811024 } },
  {
    name: '디지털미디어시티',

    position: { lat: 37.576646, lng: 126.900984 },
  },
  { name: '회룡', position: { lat: 37.724846, lng: 127.046895 } },
  { name: '판교', position: { lat: 37.394761, lng: 127.111217 } },
  { name: '오이도', position: { lat: 37.362357, lng: 126.738714 } },
  { name: '이매', position: { lat: 37.396104, lng: 127.12827 } },
  { name: '선정릉', position: { lat: 37.51098, lng: 127.043593 } },
  {
    name: '종합운동장',

    position: { lat: 37.510997, lng: 127.073642 },
  },
  { name: '천호', position: { lat: 37.538397, lng: 127.123572 } },
  { name: '창동', position: { lat: 37.653166, lng: 127.047731 } },
  { name: '사당', position: { lat: 37.47653, lng: 126.981685 } },
  { name: '노원', position: { lat: 37.655128, lng: 127.061368 } },
  { name: '군자', position: { lat: 37.557121, lng: 127.079542 } },
  { name: '건대입구', position: { lat: 37.540693, lng: 127.07023 } },
  {
    name: '고속터미널',

    position: { lat: 37.50481, lng: 127.004943 },
  },
  {
    name: '총신대입구',
    alt: '이수',
    position: { lat: 37.486263, lng: 126.981989 },
  },
  { name: '대림', position: { lat: 37.49297, lng: 126.895801 } },
  {
    name: '가산디지털단지',

    position: { lat: 37.481072, lng: 126.882343 },
  },
  { name: '온수', position: { lat: 37.492258, lng: 126.823388 } },
  {
    name: '부평구청',

    position: { lat: 37.508336, lng: 126.720548 },
  },
  { name: '잠실', position: { lat: 37.51395, lng: 127.102234 } },
  { name: '복정', position: { lat: 37.470047, lng: 127.126662 } },
  { name: '모란', position: { lat: 37.43213, lng: 127.129087 } },
  { name: '부평', position: { lat: 37.489493, lng: 126.724805 } },
  { name: '당산', position: { lat: 37.53438, lng: 126.902281 } },
  { name: '여의도', position: { lat: 37.521624, lng: 126.924191 } },
  { name: '동작', position: { lat: 37.502971, lng: 126.979306 } },
  {
    name: '김포공항',

    position: { lat: 37.562434, lng: 126.801058 },
  },
  { name: '강남', position: { lat: 37.497175, lng: 127.027926 } },
  { name: '양재', position: { lat: 37.484147, lng: 127.034631 } },
  { name: '정자', position: { lat: 37.36706, lng: 127.108105 } },
  { name: '강남구청', position: { lat: 37.517186, lng: 127.04128 } },
  { name: '선릉', position: { lat: 37.504503, lng: 127.049008 } },
  {
    name: '효창공원앞',

    position: { lat: 37.539261, lng: 126.961351 },
  },
  { name: '태릉입구', position: { lat: 37.617983, lng: 127.07512 } },
  { name: '검암', position: { lat: 37.569104, lng: 126.673728 } },
  { name: '주안', position: { lat: 37.464941, lng: 126.679923 } },
  { name: '인천', position: { lat: 37.476691, lng: 126.616936 } },
  {
    name: '인천시청',

    position: { lat: 37.457405, lng: 126.702221 },
  },
  { name: '청량리', position: { lat: 37.580178, lng: 127.046835 } },
  { name: '중랑', position: { lat: 37.594917, lng: 127.076116 } },
  { name: '충정로', position: { lat: 37.559973, lng: 126.963672 } },
  { name: '청구', position: { lat: 37.560245, lng: 127.013828 } },
  {
    name: '성신여대입구',

    position: { lat: 37.592624, lng: 127.016403 },
  },
  { name: '보문', position: { lat: 37.585286, lng: 127.019381 } },
  { name: '계양', position: { lat: 37.571462, lng: 126.735637 } },
  { name: '기흥', position: { lat: 37.275619, lng: 127.115936 } },
  { name: '옥수', position: { lat: 37.540685, lng: 127.017965 } },
  { name: '도곡', position: { lat: 37.490858, lng: 127.055381 } },
  { name: '수서', position: { lat: 37.487371, lng: 127.10188 } },
  { name: '용산', position: { lat: 37.529849, lng: 126.964561 } },
  { name: '종각', position: { lat: 37.570161, lng: 126.982923 } },
  { name: '종로5가', position: { lat: 37.570926, lng: 127.001849 } },
  { name: '제기동', position: { lat: 37.578103, lng: 127.034893 } },
  {
    name: '을지로입구',

    position: { lat: 37.566014, lng: 126.982618 },
  },
  { name: '탑석', position: { lat: 37.733579, lng: 127.088704 } },
  {
    name: '419민주묘지',

    position: { lat: 37.649593, lng: 127.013746 },
  },
  { name: '가오리', position: { lat: 37.641701, lng: 127.016792 } },
  { name: '화계', position: { lat: 37.634802, lng: 127.017519 } },
  { name: '한티', position: { lat: 37.496237, lng: 127.052873 } },
  { name: '구룡', position: { lat: 37.486839, lng: 127.058856 } },
  { name: '홍제', position: { lat: 37.589066, lng: 126.943736 } },
  { name: '김유정', position: { lat: 37.818466, lng: 127.71434 } },
  { name: '남춘천', position: { lat: 37.864007, lng: 127.723792 } },
  { name: '성균관대', position: { lat: 37.300349, lng: 126.97075 } },
  { name: '경찰병원', position: { lat: 37.495918, lng: 127.12454 } },
  { name: '구일', position: { lat: 37.496756, lng: 126.870793 } },
  { name: '야탑', position: { lat: 37.411185, lng: 127.128715 } },
  { name: '삼송', position: { lat: 37.653083, lng: 126.895558 } },
  { name: '화정', position: { lat: 37.634592, lng: 126.83265 } },
  {
    name: '영등포시장',

    position: { lat: 37.522669, lng: 126.905139 },
  },
  { name: '상일동', position: { lat: 37.556712, lng: 127.166417 } },
  { name: '공릉', position: { lat: 37.625742, lng: 127.072896 } },
  { name: '상도', position: { lat: 37.502834, lng: 126.94791 } },
  { name: '박촌', position: { lat: 37.553703, lng: 126.745077 } },
  { name: '구성', position: { lat: 37.298969, lng: 127.105664 } },
  { name: '인하대', position: { lat: 37.448493, lng: 126.649619 } },
  { name: '숭의', position: { lat: 37.460789, lng: 126.638297 } },
  {
    name: '센트럴파크',

    position: { lat: 37.393054, lng: 126.634729 },
  },
  {
    name: '국제업무지구',

    position: { lat: 37.399907, lng: 126.630347 },
  },
  { name: '강매', position: { lat: 37.612314, lng: 126.843223 } },
  { name: '달월', position: { lat: 37.379681, lng: 126.745177 } },
  { name: '원흥', position: { lat: 37.650658, lng: 126.872642 } },
  { name: '완정', position: { lat: 37.592928, lng: 126.673203 } },
  { name: '지평', position: { lat: 37.476444, lng: 127.629617 } },
  {
    name: '석바위시장',

    position: { lat: 37.457611, lng: 126.692575 },
  },
  {
    name: '상왕십리',

    position: { lat: 37.564354, lng: 127.029354 },
  },
  { name: '한양대', position: { lat: 37.555273, lng: 127.043655 } },
  { name: '뚝섬', position: { lat: 37.547184, lng: 127.047367 } },
  { name: '성수', position: { lat: 37.544581, lng: 127.055961 } },
  {
    name: '청계산입구',

    position: { lat: 37.447211, lng: 127.055664 },
  },
  {
    name: '북한산우이',

    position: { lat: 37.663146, lng: 127.012789 },
  },
  { name: '구의', position: { lat: 37.537077, lng: 127.085916 } },
  { name: '잠실나루', position: { lat: 37.520733, lng: 127.10379 } },
  {
    name: '잠실새내',

    position: { lat: 37.511687, lng: 127.086162 },
  },
  { name: '삼성', position: { lat: 37.508844, lng: 127.06316 } },
  { name: '역삼', position: { lat: 37.500622, lng: 127.036456 } },
  { name: '서초', position: { lat: 37.491897, lng: 127.007917 } },
  { name: '방배', position: { lat: 37.481426, lng: 126.997596 } },
  { name: '낙성대', position: { lat: 37.47693, lng: 126.963693 } },
  {
    name: '서울대입구',

    position: { lat: 37.481247, lng: 126.952739 },
  },
  { name: '봉천', position: { lat: 37.482362, lng: 126.941892 } },
  { name: '신림', position: { lat: 37.484201, lng: 126.929715 } },
  { name: '신대방', position: { lat: 37.487462, lng: 126.913149 } },
  {
    name: '구로디지털단지',

    position: { lat: 37.485266, lng: 126.901401 },
  },
  { name: '문래', position: { lat: 37.517933, lng: 126.89476 } },
  { name: '신촌', position: { lat: 37.555134, lng: 126.936893 } },
  { name: '이대', position: { lat: 37.556733, lng: 126.946013 } },
  { name: '아현', position: { lat: 37.557345, lng: 126.956141 } },
  { name: '용답', position: { lat: 37.561904, lng: 127.050899 } },
  { name: '신답', position: { lat: 37.57004, lng: 127.046481 } },
  { name: '도림천', position: { lat: 37.514287, lng: 126.882768 } },
  {
    name: '양천구청',

    position: { lat: 37.512398, lng: 126.865819 },
  },
  {
    name: '신정네거리',

    position: { lat: 37.520074, lng: 126.852912 },
  },
  { name: '용두', position: { lat: 37.574028, lng: 127.038091 } },
  { name: '지축', position: { lat: 37.648048, lng: 126.913951 } },
  { name: '구파발', position: { lat: 37.636763, lng: 126.918821 } },
  { name: '녹번', position: { lat: 37.600927, lng: 126.935756 } },
  { name: '무악재', position: { lat: 37.582299, lng: 126.950291 } },
  { name: '독립문', position: { lat: 37.574571, lng: 126.957748 } },
  { name: '경복궁', position: { lat: 37.575762, lng: 126.97353 } },
  { name: '안국', position: { lat: 37.576477, lng: 126.985443 } },
  {
    name: '동대입구',

    position: { lat: 37.559052, lng: 127.005602 },
  },
  { name: '금호', position: { lat: 37.548034, lng: 127.015872 } },
  { name: '압구정', position: { lat: 37.527072, lng: 127.028461 } },
  { name: '신사', position: { lat: 37.516334, lng: 127.020114 } },
  { name: '잠원', position: { lat: 37.512759, lng: 127.01122 } },
  {
    name: '남부터미널',

    position: { lat: 37.485013, lng: 127.016189 },
  },
  { name: '매봉', position: { lat: 37.486947, lng: 127.046769 } },
  { name: '대치', position: { lat: 37.494612, lng: 127.063642 } },
  { name: '학여울', position: { lat: 37.496663, lng: 127.070594 } },
  { name: '대청', position: { lat: 37.493514, lng: 127.079532 } },
  { name: '일원', position: { lat: 37.483681, lng: 127.08439 } },
  { name: '당고개', position: { lat: 37.670272, lng: 127.079066 } },
  { name: '상계', position: { lat: 37.660878, lng: 127.073572 } },
  { name: '쌍문', position: { lat: 37.648627, lng: 127.034709 } },
  { name: '수유', position: { lat: 37.638052, lng: 127.025732 } },
  { name: '미아', position: { lat: 37.62667, lng: 127.025983 } },
  {
    name: '미아사거리',

    position: { lat: 37.613292, lng: 127.030053 },
  },
  { name: '길음', position: { lat: 37.603407, lng: 127.025053 } },
  {
    name: '한성대입구',

    position: { lat: 37.588458, lng: 127.006221 },
  },
  { name: '혜화', position: { lat: 37.582336, lng: 127.001844 } },
  { name: '명동', position: { lat: 37.560989, lng: 126.986325 } },
  { name: '회현', position: { lat: 37.558514, lng: 126.978246 } },
  { name: '숙대입구', position: { lat: 37.54456, lng: 126.972106 } },
  { name: '신용산', position: { lat: 37.52917, lng: 126.967894 } },
  { name: '남태령', position: { lat: 37.463873, lng: 126.989134 } },
  { name: '남영', position: { lat: 37.541021, lng: 126.9713 } },
  { name: '노량진', position: { lat: 37.514219, lng: 126.942454 } },
  { name: '대방', position: { lat: 37.513342, lng: 126.926382 } },
  { name: '영등포', position: { lat: 37.515504, lng: 126.907628 } },
  { name: '서빙고', position: { lat: 37.519594, lng: 126.988537 } },
  { name: '한남', position: { lat: 37.52943, lng: 127.009169 } },
  { name: '응봉', position: { lat: 37.549946, lng: 127.034538 } },
  { name: '외대앞', position: { lat: 37.596073, lng: 127.063549 } },
  { name: '신이문', position: { lat: 37.601854, lng: 127.067325 } },
  { name: '월계', position: { lat: 37.633212, lng: 127.058831 } },
  { name: '녹천', position: { lat: 37.644799, lng: 127.051269 } },
  { name: '개포동', position: { lat: 37.489116, lng: 127.06614 } },
  {
    name: '대모산입구',

    position: { lat: 37.491373, lng: 127.07272 },
  },
  { name: '양원', position: { lat: 37.606596, lng: 127.107906 } },
  { name: '구리', position: { lat: 37.603392, lng: 127.143869 } },
  { name: '도농', position: { lat: 37.608806, lng: 127.161153 } },
  { name: '양정', position: { lat: 37.60533, lng: 127.19364 } },
  { name: '덕소', position: { lat: 37.586781, lng: 127.208832 } },
  { name: '도심', position: { lat: 37.579622, lng: 127.222672 } },
  { name: '팔당', position: { lat: 37.547371, lng: 127.243939 } },
  { name: '운길산', position: { lat: 37.554669, lng: 127.310115 } },
  { name: '양수', position: { lat: 37.545981, lng: 127.329098 } },
  { name: '신원', position: { lat: 37.525545, lng: 127.372921 } },
  { name: '국수', position: { lat: 37.516169, lng: 127.399367 } },
  { name: '아신', position: { lat: 37.51382, lng: 127.443173 } },
  { name: '오빈', position: { lat: 37.506062, lng: 127.473868 } },
  {
    name: '양평',
    alt: '경의중앙선',
    position: { lat: 37.492832, lng: 127.491814 },
  },
  { name: '원덕', position: { lat: 37.468672, lng: 127.547076 } },
  { name: '용문', position: { lat: 37.48223, lng: 127.594647 } },
  {
    name: '서울',
    alt: '경의중앙선',
    position: { lat: 37.556328, lng: 126.969522 },
  },
  {
    name: '신촌',
    alt: '경의중앙선',
    position: { lat: 37.559783, lng: 126.942319 },
  },
  { name: '서강대', position: { lat: 37.551881, lng: 126.935711 } },
  { name: '가좌', position: { lat: 37.568491, lng: 126.915487 } },
  { name: '수색', position: { lat: 37.580842, lng: 126.895611 } },
  { name: '화전', position: { lat: 37.602888, lng: 126.868387 } },
  { name: '행신', position: { lat: 37.612102, lng: 126.834146 } },
  { name: '능곡', position: { lat: 37.618808, lng: 126.820783 } },
  { name: '곡산', position: { lat: 37.645676, lng: 126.801762 } },
  { name: '백마', position: { lat: 37.658239, lng: 126.794461 } },
  { name: '풍산', position: { lat: 37.672346, lng: 126.786243 } },
  { name: '일산', position: { lat: 37.682077, lng: 126.769846 } },
  { name: '탄현', position: { lat: 37.694023, lng: 126.761086 } },
  { name: '야당', position: { lat: 37.712327, lng: 126.761356 } },
  { name: '운정', position: { lat: 37.725826, lng: 126.767257 } },
  { name: '금릉', position: { lat: 37.751322, lng: 126.765347 } },
  { name: '금촌', position: { lat: 37.766217, lng: 126.774644 } },
  { name: '월롱', position: { lat: 37.796188, lng: 126.792587 } },
  { name: '파주', position: { lat: 37.815298, lng: 126.792783 } },
  { name: '문산', position: { lat: 37.854619, lng: 126.788047 } },
  { name: '신내', position: { lat: 37.612887, lng: 127.103218 } },
  { name: '갈매', position: { lat: 37.634118, lng: 127.114757 } },
  { name: '별내', position: { lat: 37.64202, lng: 127.12684 } },
  { name: '퇴계원', position: { lat: 37.648311, lng: 127.143952 } },
  { name: '사릉', position: { lat: 37.65108, lng: 127.176933 } },
  { name: '금곡', position: { lat: 37.637382, lng: 127.207853 } },
  {
    name: '평내호평',

    position: { lat: 37.653225, lng: 127.244493 },
  },
  { name: '천마산', position: { lat: 37.658978, lng: 127.285379 } },
  { name: '마석', position: { lat: 37.652782, lng: 127.311767 } },
  { name: '대성리', position: { lat: 37.684071, lng: 127.379319 } },
  { name: '청평', position: { lat: 37.735488, lng: 127.42661 } },
  { name: '상천', position: { lat: 37.770246, lng: 127.454821 } },
  { name: '가평', position: { lat: 37.814536, lng: 127.510739 } },
  { name: '굴봉산', position: { lat: 37.832067, lng: 127.557695 } },
  { name: '백양리', position: { lat: 37.830779, lng: 127.58933 } },
  { name: '강촌', position: { lat: 37.805723, lng: 127.634146 } },
  { name: '춘천', position: { lat: 37.885054, lng: 127.717023 } },
  { name: '봉명', position: { lat: 36.801215, lng: 127.135763 } },
  {
    name: '쌍용',
    alt: '나사렛대',
    position: { lat: 36.793759, lng: 127.1214 },
  },
  { name: '아산', position: { lat: 36.792053, lng: 127.104361 } },
  { name: '배방', position: { lat: 36.777629, lng: 127.052991 } },
  {
    name: '온양온천',

    position: { lat: 36.780483, lng: 127.003249 },
  },
  { name: '신창', position: { lat: 36.769502, lng: 126.951108 } },
  { name: '선바위', position: { lat: 37.451673, lng: 127.002303 } },
  {
    name: '경마공원',

    position: { lat: 37.443885, lng: 127.007888 },
  },
  { name: '대공원', position: { lat: 37.435675, lng: 127.006523 } },
  { name: '과천', position: { lat: 37.433021, lng: 126.996568 } },
  {
    name: '정부과천청사',

    position: { lat: 37.426513, lng: 126.98978 },
  },
  { name: '인덕원', position: { lat: 37.401553, lng: 126.976715 } },
  { name: '평촌', position: { lat: 37.394287, lng: 126.963883 } },
  { name: '범계', position: { lat: 37.389793, lng: 126.950806 } },
  { name: '삼동', position: { lat: 37.409522, lng: 127.20336 } },
  {
    name: '경기광주',

    position: { lat: 37.399907, lng: 126.630347 },
  },
  { name: '초월', position: { lat: 37.374419, lng: 127.299 } },
  { name: '곤지암', position: { lat: 37.351315, lng: 127.34674 } },
  {
    name: '신둔도예촌',

    position: { lat: 37.317185, lng: 127.40476 },
  },
  { name: '이천', position: { lat: 37.265579, lng: 127.44226 } },
  { name: '부발', position: { lat: 37.260192, lng: 127.490277 } },
  {
    name: '세종대왕릉',

    position: { lat: 37.295309, lng: 127.570938 },
  },
  { name: '여주', position: { lat: 37.282701, lng: 127.628607 } },
  { name: '구로', position: { lat: 37.503039, lng: 126.881966 } },
  { name: '금천구청', position: { lat: 37.455626, lng: 126.89398 } },
  { name: '석수', position: { lat: 37.435047, lng: 126.902295 } },
  { name: '관악', position: { lat: 37.419232, lng: 126.908706 } },
  { name: '안양', position: { lat: 37.401592, lng: 126.922874 } },
  { name: '명학', position: { lat: 37.384653, lng: 126.935433 } },
  { name: '군포', position: { lat: 37.35356, lng: 126.948462 } },
  { name: '의왕', position: { lat: 37.320852, lng: 126.948217 } },
  { name: '화서', position: { lat: 37.283862, lng: 126.989627 } },
  { name: '독산', position: { lat: 37.466613, lng: 126.889249 } },
  { name: '세류', position: { lat: 37.245025, lng: 127.013222 } },
  { name: '병점', position: { lat: 37.207503, lng: 127.032731 } },
  { name: '세마', position: { lat: 37.187533, lng: 127.04318 } },
  { name: '오산대', position: { lat: 37.168953, lng: 127.063197 } },
  { name: '오산', position: { lat: 37.145885, lng: 127.06672 } },
  { name: '진위', position: { lat: 37.109447, lng: 127.062278 } },
  { name: '송탄', position: { lat: 37.075696, lng: 127.054301 } },
  { name: '서정리', position: { lat: 37.056496, lng: 127.052819 } },
  { name: '지제', position: { lat: 37.0188, lng: 127.070444 } },
  { name: '평택', position: { lat: 36.990726, lng: 127.085159 } },
  { name: '성환', position: { lat: 36.916076, lng: 127.126964 } },
  { name: '직산', position: { lat: 36.870593, lng: 127.143904 } },
  { name: '두정', position: { lat: 36.833705, lng: 127.14896 } },
  { name: '천안', position: { lat: 36.810005, lng: 127.146826 } },
  { name: '당정', position: { lat: 37.344285, lng: 126.948345 } },
  { name: '서동탄', position: { lat: 37.195504, lng: 127.051672 } },
  { name: '광명', position: { lat: 37.416182, lng: 126.884466 } },
  { name: '산본', position: { lat: 37.358101, lng: 126.933274 } },
  { name: '대야미', position: { lat: 37.328467, lng: 126.917332 } },
  { name: '반월', position: { lat: 37.312212, lng: 126.903524 } },
  { name: '상록수', position: { lat: 37.302795, lng: 126.866489 } },
  { name: '한대앞', position: { lat: 37.309689, lng: 126.85344 } },
  { name: '중앙', position: { lat: 37.315941, lng: 126.838573 } },
  { name: '고잔', position: { lat: 37.316777, lng: 126.823249 } },
  { name: '초지', position: { lat: 37.320646, lng: 126.805913 } },
  { name: '안산', position: { lat: 37.327082, lng: 126.788532 } },
  {
    name: '신길온천',

    position: { lat: 37.338212, lng: 126.765844 },
  },
  { name: '정왕', position: { lat: 37.351735, lng: 126.742989 } },
  { name: '수리산', position: { lat: 37.349801, lng: 126.925365 } },
  { name: '개봉', position: { lat: 37.494594, lng: 126.85868 } },
  { name: '오류동', position: { lat: 37.494526, lng: 126.845365 } },
  { name: '역곡', position: { lat: 37.485178, lng: 126.811502 } },
  { name: '부천', position: { lat: 37.48405, lng: 126.782686 } },
  { name: '송내', position: { lat: 37.4876, lng: 126.753664 } },
  { name: '백운', position: { lat: 37.483664, lng: 126.707704 } },
  { name: '동암', position: { lat: 37.471408, lng: 126.702896 } },
  { name: '제물포', position: { lat: 37.466769, lng: 126.656666 } },
  { name: '동인천', position: { lat: 37.475276, lng: 126.632802 } },
  { name: '부개', position: { lat: 37.488418, lng: 126.74109 } },
  { name: '간석', position: { lat: 37.464737, lng: 126.694181 } },
  { name: '도원', position: { lat: 37.468446, lng: 126.642706 } },
  { name: '중동', position: { lat: 37.486562, lng: 126.764843 } },
  { name: '도화', position: { lat: 37.46607, lng: 126.668672 } },
  { name: '서울숲', position: { lat: 37.543617, lng: 127.044707 } },
  {
    name: '압구정로데오',

    position: { lat: 37.527381, lng: 127.040534 },
  },
  { name: '소사', position: { lat: 37.482753, lng: 126.79544 } },
  { name: '가천대', position: { lat: 37.448605, lng: 127.126697 } },
  { name: '태평', position: { lat: 37.440019, lng: 127.127709 } },
  { name: '서현', position: { lat: 37.385126, lng: 127.123592 } },
  { name: '수내', position: { lat: 37.378455, lng: 127.114322 } },
  { name: '미금', position: { lat: 37.350077, lng: 127.10891 } },
  { name: '오리', position: { lat: 37.339824, lng: 127.108942 } },
  { name: '보정', position: { lat: 37.312752, lng: 127.108196 } },
  { name: '죽전', position: { lat: 37.324753, lng: 127.107395 } },
  { name: '신갈', position: { lat: 37.286102, lng: 127.111313 } },
  { name: '상갈', position: { lat: 37.26181, lng: 127.108847 } },
  { name: '청명', position: { lat: 37.259489, lng: 127.078934 } },
  { name: '영통', position: { lat: 37.251568, lng: 127.071394 } },
  { name: '망포', position: { lat: 37.245795, lng: 127.057353 } },
  {
    name: '매탄권선',

    position: { lat: 37.252759, lng: 127.040566 },
  },
  {
    name: '수원시청',

    position: { lat: 37.261911, lng: 127.030736 },
  },
  { name: '매교', position: { lat: 37.265481, lng: 127.015678 } },
  { name: '월곶', position: { lat: 37.391769, lng: 126.742699 } },
  { name: '소래포구', position: { lat: 37.40095, lng: 126.733522 } },
  {
    name: '인천논현',

    position: { lat: 37.400614, lng: 126.722478 },
  },
  { name: '호구포', position: { lat: 37.401637, lng: 126.708627 } },
  {
    name: '남동인더스파크',

    position: { lat: 37.407722, lng: 126.695216 },
  },
  { name: '연수', position: { lat: 37.417804, lng: 126.67894 } },
  { name: '송도', position: { lat: 37.428514, lng: 126.657772 } },
  { name: '신포', position: { lat: 37.46874, lng: 126.623853 } },
  { name: '방학', position: { lat: 37.667503, lng: 127.044273 } },
  { name: '도봉', position: { lat: 37.679563, lng: 127.045595 } },
  { name: '망월사', position: { lat: 37.709914, lng: 127.047455 } },
  { name: '의정부', position: { lat: 37.738415, lng: 127.045958 } },
  { name: '가능', position: { lat: 37.748577, lng: 127.044213 } },
  { name: '녹양', position: { lat: 37.75938, lng: 127.042292 } },
  { name: '양주', position: { lat: 37.774381, lng: 127.044708 } },
  { name: '덕계', position: { lat: 37.818486, lng: 127.056486 } },
  { name: '덕정', position: { lat: 37.843188, lng: 127.061277 } },
  { name: '지행', position: { lat: 37.892334, lng: 127.055716 } },
  {
    name: '동두천중앙',

    position: { lat: 37.901885, lng: 127.056482 },
  },
  { name: '보산', position: { lat: 37.913702, lng: 127.057277 } },
  { name: '동두천', position: { lat: 37.927878, lng: 127.05479 } },
  { name: '소요산', position: { lat: 37.9481, lng: 127.061034 } },
  { name: '원당', position: { lat: 37.653324, lng: 126.843041 } },
  { name: '백석', position: { lat: 37.643114, lng: 126.78787 } },
  { name: '마두', position: { lat: 37.652206, lng: 126.77762 } },
  { name: '정발산', position: { lat: 37.659477, lng: 126.773359 } },
  { name: '주엽', position: { lat: 37.670072, lng: 126.761334 } },
  { name: '대화', position: { lat: 37.676087, lng: 126.747569 } },
  { name: '방화', position: { lat: 37.577446, lng: 126.812741 } },
  { name: '개화산', position: { lat: 37.572399, lng: 126.806171 } },
  { name: '송정', position: { lat: 37.561184, lng: 126.811973 } },
  { name: '마곡', position: { lat: 37.560183, lng: 126.825448 } },
  { name: '발산', position: { lat: 37.558598, lng: 126.837668 } },
  { name: '우장산', position: { lat: 37.548768, lng: 126.836318 } },
  { name: '화곡', position: { lat: 37.541513, lng: 126.840461 } },
  { name: '신정', position: { lat: 37.524997, lng: 126.856191 } },
  { name: '목동', position: { lat: 37.526065, lng: 126.864931 } },
  { name: '오목교', position: { lat: 37.524496, lng: 126.875181 } },
  { name: '양평', position: { lat: 37.525648, lng: 126.885778 } },
  {
    name: '여의나루',

    position: { lat: 37.527098, lng: 126.932901 },
  },
  { name: '마포', position: { lat: 37.539574, lng: 126.945932 } },
  { name: '애오개', position: { lat: 37.553736, lng: 126.95682 } },
  { name: '서대문', position: { lat: 37.565773, lng: 126.966641 } },
  { name: '광화문', position: { lat: 37.571026, lng: 126.976669 } },
  { name: '신금호', position: { lat: 37.554548, lng: 127.020331 } },
  { name: '행당', position: { lat: 37.557322, lng: 127.029476 } },
  { name: '마장', position: { lat: 37.5661, lng: 127.042973 } },
  { name: '답십리', position: { lat: 37.566747, lng: 127.052704 } },
  { name: '장한평', position: { lat: 37.56144, lng: 127.064623 } },
  { name: '아차산', position: { lat: 37.551691, lng: 127.089761 } },
  { name: '광나루', position: { lat: 37.545303, lng: 127.10357 } },
  { name: '강동', position: { lat: 37.535804, lng: 127.132481 } },
  { name: '길동', position: { lat: 37.537801, lng: 127.140004 } },
  {
    name: '굽은다리',

    position: { lat: 37.545477, lng: 127.142853 },
  },
  { name: '명일', position: { lat: 37.55137, lng: 127.143999 } },
  { name: '고덕', position: { lat: 37.555004, lng: 127.154151 } },
  { name: '둔촌동', position: { lat: 37.527788, lng: 127.136248 } },
  {
    name: '올림픽공원',

    position: { lat: 37.516078, lng: 127.130848 },
  },
  { name: '방이', position: { lat: 37.508857, lng: 127.126133 } },
  { name: '개롱', position: { lat: 37.498079, lng: 127.13482 } },
  { name: '거여', position: { lat: 37.493105, lng: 127.14415 } },
  { name: '마천', position: { lat: 37.49499, lng: 127.152781 } },
  { name: '응암', position: { lat: 37.598605, lng: 126.915577 } },
  { name: '역촌', position: { lat: 37.606021, lng: 126.922744 } },
  { name: '독바위', position: { lat: 37.618456, lng: 126.933031 } },
  { name: '구산', position: { lat: 37.611377, lng: 126.91727 } },
  { name: '새절', position: { lat: 37.591148, lng: 126.913629 } },
  { name: '증산', position: { lat: 37.583876, lng: 126.909645 } },
  {
    name: '월드컵경기장',

    position: { lat: 37.569532, lng: 126.899298 },
  },
  {
    name: '마포구청',

    position: { lat: 37.563515, lng: 126.903343 },
  },
  { name: '망원', position: { lat: 37.556094, lng: 126.910052 } },
  { name: '상수', position: { lat: 37.547716, lng: 126.922852 } },
  { name: '광흥창', position: { lat: 37.547456, lng: 126.931993 } },
  { name: '대흥', position: { lat: 37.547771, lng: 126.942069 } },
  { name: '녹사평', position: { lat: 37.534675, lng: 126.986695 } },
  { name: '이태원', position: { lat: 37.534488, lng: 126.994302 } },
  { name: '한강진', position: { lat: 37.539631, lng: 127.001725 } },
  {
    name: '버티고개',

    position: { lat: 37.548013, lng: 127.007055 },
  },
  { name: '창신', position: { lat: 37.579661, lng: 127.015241 } },
  { name: '안암', position: { lat: 37.586272, lng: 127.029005 } },
  { name: '고려대', position: { lat: 37.590508, lng: 127.036296 } },
  { name: '월곡', position: { lat: 37.601948, lng: 127.041518 } },
  { name: '상월곡', position: { lat: 37.606377, lng: 127.048491 } },
  { name: '돌곶이', position: { lat: 37.610537, lng: 127.056431 } },
  { name: '화랑대', position: { lat: 37.620064, lng: 127.084689 } },
  { name: '봉화산', position: { lat: 37.617283, lng: 127.091401 } },
  { name: '장암', position: { lat: 37.700109, lng: 127.053196 } },
  { name: '수락산', position: { lat: 37.67785, lng: 127.055315 } },
  { name: '마들', position: { lat: 37.66494, lng: 127.057675 } },
  { name: '중계', position: { lat: 37.644583, lng: 127.064303 } },
  { name: '하계', position: { lat: 37.636352, lng: 127.06799 } },
  { name: '먹골', position: { lat: 37.610637, lng: 127.077725 } },
  { name: '중화', position: { lat: 37.602545, lng: 127.079264 } },
  { name: '면목', position: { lat: 37.588579, lng: 127.087503 } },
  { name: '사가정', position: { lat: 37.580894, lng: 127.088478 } },
  { name: '용마산', position: { lat: 37.573647, lng: 127.086727 } },
  { name: '중곡', position: { lat: 37.565923, lng: 127.08432 } },
  {
    name: '어린이대공원',

    position: { lat: 37.548014, lng: 127.074658 },
  },
  {
    name: '뚝섬유원지',

    position: { lat: 37.53154, lng: 127.066704 },
  },
  { name: '청담', position: { lat: 37.519365, lng: 127.05335 } },
  { name: '학동', position: { lat: 37.514229, lng: 127.031656 } },
  { name: '논현', position: { lat: 37.511093, lng: 127.021415 } },
  { name: '반포', position: { lat: 37.508178, lng: 127.011727 } },
  { name: '내방', position: { lat: 37.487618, lng: 126.993513 } },
  { name: '남성', position: { lat: 37.484596, lng: 126.971251 } },
  {
    name: '숭실대입구',

    position: { lat: 37.496029, lng: 126.953822 },
  },
  { name: '장승배기', position: { lat: 37.504898, lng: 126.93915 } },
  {
    name: '신대방삼거리',

    position: { lat: 37.499701, lng: 126.928276 },
  },
  { name: '보라매', position: { lat: 37.499872, lng: 126.920428 } },
  { name: '신풍', position: { lat: 37.50008, lng: 126.90993 } },
  { name: '남구로', position: { lat: 37.486056, lng: 126.887249 } },
  { name: '철산', position: { lat: 37.47605, lng: 126.867911 } },
  {
    name: '광명사거리',

    position: { lat: 37.479252, lng: 126.854876 },
  },
  { name: '천왕', position: { lat: 37.486637, lng: 126.838713 } },
  { name: '까치울', position: { lat: 37.506207, lng: 126.810939 } },
  {
    name: '부천종합운동장',

    position: { lat: 37.50538, lng: 126.797337 },
  },
  { name: '춘의', position: { lat: 37.503663, lng: 126.787036 } },
  { name: '신중동', position: { lat: 37.503048, lng: 126.77596 } },
  {
    name: '부천시청',

    position: { lat: 37.504631, lng: 126.763538 },
  },
  { name: '상동', position: { lat: 37.505781, lng: 126.753083 } },
  {
    name: '삼산체육관',

    position: { lat: 37.506411, lng: 126.742153 },
  },
  { name: '굴포천', position: { lat: 37.506997, lng: 126.73128 } },
  { name: '암사', position: { lat: 37.55021, lng: 127.127562 } },
  {
    name: '강동구청',

    position: { lat: 37.530341, lng: 127.120508 },
  },
  {
    name: '몽촌토성',

    position: { lat: 37.517409, lng: 127.112359 },
  },
  { name: '석촌', position: { lat: 37.505431, lng: 127.106979 } },
  { name: '송파', position: { lat: 37.499703, lng: 127.112183 } },
  { name: '문정', position: { lat: 37.485855, lng: 127.1225 } },
  { name: '장지', position: { lat: 37.478703, lng: 127.126191 } },
  { name: '산성', position: { lat: 37.457122, lng: 127.149908 } },
  {
    name: '남한산성입구',

    position: { lat: 37.451535, lng: 127.159816 },
  },
  {
    name: '단대오거리',

    position: { lat: 37.44521, lng: 127.156866 },
  },
  { name: '신흥', position: { lat: 37.440918, lng: 127.147564 } },
  { name: '수진', position: { lat: 37.437428, lng: 127.140722 } },
  { name: '귤현', position: { lat: 37.566379, lng: 126.742654 } },
  { name: '임학', position: { lat: 37.545059, lng: 126.738665 } },
  { name: '계산', position: { lat: 37.543238, lng: 126.728128 } },
  {
    name: '경인교대입구',

    position: { lat: 37.538157, lng: 126.722597 },
  },
  { name: '작전', position: { lat: 37.530415, lng: 126.722527 } },
  { name: '갈산', position: { lat: 37.517268, lng: 126.721514 } },
  {
    name: '부평시장',

    position: { lat: 37.498383, lng: 126.722244 },
  },
  { name: '동수', position: { lat: 37.485312, lng: 126.718247 } },
  {
    name: '부평삼거리',

    position: { lat: 37.477679, lng: 126.710208 },
  },
  {
    name: '간석오거리',

    position: { lat: 37.467048, lng: 126.707938 },
  },
  {
    name: '예술회관',

    position: { lat: 37.449396, lng: 126.701012 },
  },
  {
    name: '인천터미널',

    position: { lat: 37.442383, lng: 126.699706 },
  },
  {
    name: '문학경기장',

    position: { lat: 37.434935, lng: 126.698579 },
  },
  { name: '선학', position: { lat: 37.426684, lng: 126.698863 } },
  { name: '신연수', position: { lat: 37.41804, lng: 126.693863 } },
  { name: '동춘', position: { lat: 37.404737, lng: 126.681015 } },
  { name: '동막', position: { lat: 37.397878, lng: 126.674005 } },
  {
    name: '캠퍼스타운',

    position: { lat: 37.387855, lng: 126.661673 },
  },
  {
    name: '테크노파크',

    position: { lat: 37.382268, lng: 126.656365 },
  },
  {
    name: '지식정보단지',

    position: { lat: 37.378384, lng: 126.645168 },
  },
  {
    name: '인천대입구',

    position: { lat: 37.386007, lng: 126.639484 },
  },
  {
    name: '검단오류',

    position: { lat: 37.594877, lng: 126.627178 },
  },
  { name: '왕길', position: { lat: 37.59518, lng: 126.642696 } },
  {
    name: '검단사거리',

    position: { lat: 37.60185, lng: 126.657108 },
  },
  { name: '마전', position: { lat: 37.597566, lng: 126.666998 } },
  { name: '독정', position: { lat: 37.585212, lng: 126.675844 } },
  { name: '검바위', position: { lat: 37.561405, lng: 126.677566 } },
  {
    name: '아시아드경기장',

    position: { lat: 37.5517, lng: 126.677122 },
  },
  { name: '서구청', position: { lat: 37.543742, lng: 126.676787 } },
  { name: '가정', position: { lat: 37.524649, lng: 126.675539 } },
  {
    name: '가정중앙시장',

    position: { lat: 37.517054, lng: 126.676672 },
  },
  { name: '석남', position: { lat: 37.506193, lng: 126.676203 } },
  {
    name: '서부여성회관',

    position: { lat: 37.506193, lng: 126.676203 },
  },
  { name: '인천가좌', position: { lat: 37.4897, lng: 126.675208 } },
  { name: '가재울', position: { lat: 37.484192, lng: 126.683673 } },
  {
    name: '주안국가산단',

    position: { lat: 37.473703, lng: 126.68113 },
  },
  {
    name: '시민공원',

    position: { lat: 37.458335, lng: 126.681192 },
  },
  {
    name: '석천사거리',

    position: { lat: 37.456805, lng: 126.709986 },
  },
  {
    name: '모래내시장',

    position: { lat: 37.45583, lng: 126.719298 },
  },
  { name: '만수', position: { lat: 37.454911, lng: 126.732094 } },
  {
    name: '남동구청',

    position: { lat: 37.448161, lng: 126.736939 },
  },
  {
    name: '인천대공원',

    position: { lat: 37.448769, lng: 126.752618 },
  },
  { name: '운연', position: { lat: 37.440127, lng: 126.75997 } },
  { name: '개화', position: { lat: 37.578608, lng: 126.798153 } },
  {
    name: '공항시장',

    position: { lat: 37.563726, lng: 126.810678 },
  },
  { name: '신방화', position: { lat: 37.567532, lng: 126.816601 } },
  {
    name: '마곡나루',

    position: { lat: 37.567336, lng: 126.829497 },
  },
  {
    name: '양천향교',

    position: { lat: 37.568381, lng: 126.841333 },
  },
  { name: '가양', position: { lat: 37.561391, lng: 126.854456 } },
  { name: '증미', position: { lat: 37.557402, lng: 126.861939 } },
  { name: '등촌', position: { lat: 37.550632, lng: 126.865689 } },
  { name: '염창', position: { lat: 37.546936, lng: 126.874916 } },
  { name: '신목동', position: { lat: 37.544277, lng: 126.88308 } },
  { name: '선유도', position: { lat: 37.53802, lng: 126.893525 } },
  {
    name: '국회의사당',

    position: { lat: 37.528105, lng: 126.917874 },
  },
  { name: '샛강', position: { lat: 37.517274, lng: 126.928422 } },
  { name: '노들', position: { lat: 37.512887, lng: 126.953222 } },
  { name: '흑석', position: { lat: 37.50877, lng: 126.963708 } },
  { name: '구반포', position: { lat: 37.501364, lng: 126.987332 } },
  { name: '신반포', position: { lat: 37.503415, lng: 126.995925 } },
  { name: '사평', position: { lat: 37.504206, lng: 127.015259 } },
  { name: '신논현', position: { lat: 37.504598, lng: 127.02506 } },
  { name: '언주', position: { lat: 37.507287, lng: 127.033868 } },
  {
    name: '삼성중앙',

    position: { lat: 37.513011, lng: 127.053282 },
  },
  { name: '봉은사', position: { lat: 37.514219, lng: 127.060245 } },
  {
    name: '청라국제도시',

    position: { lat: 37.555878, lng: 126.625327 },
  },
  { name: '운서', position: { lat: 37.492904, lng: 126.49379 } },
  {
    name: '공항화물청사',

    position: { lat: 37.458366, lng: 126.476241 },
  },
  {
    name: '인천국제공항',

    position: { lat: 37.447464, lng: 126.452508 },
  },
  { name: '영종', position: { lat: 37.511466, lng: 126.5237 } },
  {
    name: '양재시민의숲',

    position: { lat: 37.470023, lng: 127.03842 },
  },
  { name: '김량장', position: { lat: 37.237247, lng: 127.198781 } },
  {
    name: '운동장·송담대',

    position: { lat: 37.237845, lng: 127.209198 },
  },
  { name: '고진', position: { lat: 37.24484, lng: 127.214251 } },
  { name: '보평', position: { lat: 37.258965, lng: 127.218457 } },
  { name: '둔전', position: { lat: 37.267051, lng: 127.21364 } },
  {
    name: '전대·에버랜드',

    position: { lat: 37.285342, lng: 127.219561 },
  },
  { name: '발곡', position: { lat: 37.727048, lng: 127.052803 } },
  { name: '범골', position: { lat: 37.728755, lng: 127.04353 } },
  {
    name: '경전철의정부',

    position: { lat: 37.737202, lng: 127.043257 },
  },
  {
    name: '의정부시청',

    position: { lat: 37.739256, lng: 127.034781 },
  },
  { name: '흥선', position: { lat: 37.743302, lng: 127.037023 } },
  {
    name: '의정부중앙',

    position: { lat: 37.743676, lng: 127.049565 },
  },
  { name: '동오', position: { lat: 37.745271, lng: 127.056947 } },
  { name: '새말', position: { lat: 37.748885, lng: 127.06362 } },
  {
    name: '경기도청북부청사',

    position: { lat: 37.75059, lng: 127.071495 },
  },
  { name: '효자', position: { lat: 37.754025, lng: 127.076902 } },
  { name: '곤제', position: { lat: 37.750471, lng: 127.083715 } },
  { name: '어룡', position: { lat: 37.742802, lng: 127.085035 } },
  { name: '송산', position: { lat: 37.737279, lng: 127.087159 } },
  {
    name: '솔밭공원',

    position: { lat: 37.656088, lng: 127.013252 },
  },
  { name: '삼양', position: { lat: 37.627165, lng: 127.018152 } },
  {
    name: '삼양사거리',

    position: { lat: 37.621512, lng: 127.02048 },
  },
  { name: '솔샘', position: { lat: 37.62124, lng: 127.013528 } },
  {
    name: '북한산보국문',

    position: { lat: 37.612343, lng: 127.008009 },
  },
  { name: '정릉', position: { lat: 37.602798, lng: 127.01349 } },
  { name: '동천', position: { lat: 37.337928, lng: 127.102976 } },
  {
    name: '수지구청',

    position: { lat: 37.322702, lng: 127.095026 },
  },
  { name: '성복', position: { lat: 37.313335, lng: 127.0801 } },
  { name: '상현', position: { lat: 37.297664, lng: 127.069342 } },
  {
    name: '광교중앙',

    position: { lat: 37.288617, lng: 127.051478 },
  },
  { name: '광교', position: { lat: 37.30211, lng: 127.044483 } },
  { name: '강남대', position: { lat: 37.270161, lng: 127.126033 } },
  { name: '지석', position: { lat: 37.269606, lng: 127.136515 } },
  { name: '어정', position: { lat: 37.274917, lng: 127.143714 } },
  { name: '동백', position: { lat: 37.269043, lng: 127.152716 } },
  { name: '초당', position: { lat: 37.260752, lng: 127.159443 } },
  { name: '삼가', position: { lat: 37.242115, lng: 127.168075 } },
  {
    name: '시청·용인대',

    position: { lat: 37.239151, lng: 127.178406 },
  },
  { name: '명지대', position: { lat: 37.237964, lng: 127.190294 } },
];

const SearchStation = ({ setChosenStation }) => {
  const [stationInput, setStationInput] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleInput = (event) => {
    const inputText = event.target.value;
    setStationInput(inputText);

    const filteredStations = seoulSubwayStations.filter((station) =>
      station.name.includes(inputText),
    );
    if (!inputText.trim().length) return;

    const recommendationList = filteredStations.map((station) => station);
    setRecommendations(recommendationList);
  };

  return (
    <form className="mx-auto flex flex-col">
      <input
        placeholder="지하철 역 입력!"
        type="text"
        onChange={handleInput}
        className="border-b-1 mx-1 w-full border-b border-gray/30 bg-white/50 px-1 outline-none"
      />
      <div className="devide flex flex-col divide-y">
        {recommendations.slice(0, 10).map((recommendation, index) => (
          <button
            key={index}
            className="py-2"
            onClick={() => {
              const deepCopyRecommendation = JSON.parse(
                JSON.stringify(recommendation),
              );

              setChosenStation(deepCopyRecommendation);
            }}
          >
            {recommendation.name}
          </button>
        ))}
      </div>
    </form>
  );
};
export default SearchStation;
