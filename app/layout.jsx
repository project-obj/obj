import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Object',
  description: '가고 싶었잖아요. Object',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ko">
      <body
        className={`font-pretendard box-border bg-[#F5EFE7] text-gray text-body`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
