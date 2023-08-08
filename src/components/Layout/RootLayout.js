import { SessionProvider } from 'next-auth/react';
import Footer from './Footer';
import Navbar from './Navbar';

const RootLayout = ({ children, session}) => {

    return (
        <SessionProvider session={session}>
        <div>
            <Navbar /> {children} <Footer />
        </div>
        </SessionProvider>
    );
};

export default RootLayout;