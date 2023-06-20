import Banner from '@/components/Banner';

const Home = () => {
  return (
    <div className="h-[90vh] overflow-hidden bg-gradient-to-br from-mint to-mint-em">
      <Banner />
      <main className="px-auto mt-0">
        <div className="flex-col items-center justify-center">
          <div className="container mx-auto ">
            <p className="pt-6 text-center text-white">
              가보고 싶었던 곳을 잊고 귀가 하신 경험이 있지 않나요?
            </p>
            <p className="text-center text-white">
              이젠 잊지 말고 후회없이 하루를 보내세요!
            </p>
            <h2 className="text-5xl mb-8 pt-6 text-center font-bold text-white">
              나만의 Place, MARKER!
            </h2>
            <img src="icon.png" alt="map" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
