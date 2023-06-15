import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Object',
  description: '가고 싶었잖아요. Object',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ko">
      <body className="bg-[#F5EFE7] text-body text-gray">
        <div className="box-border flex min-h-screen w-screen flex-col items-center justify-start font-pretendard">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
