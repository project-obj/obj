import Banner from '@/components/Banner';

const Home = () => {
  return (
    <div className="h-[90vh] bg-gradient-to-br from-mint to-mint-em">
      <Banner />
      <main className="px-auto mt-0">
        <div className="flex-col items-center justify-center">
          <div className="container"></div>
        </div>
      </main>
    </div>
  );
};

export default Home;
