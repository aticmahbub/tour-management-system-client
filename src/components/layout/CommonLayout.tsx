import type {ReactNode} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

interface IProps {
    children: ReactNode;
}

function CommonLayout({children}: IProps) {
    return (
        <div className=' min-h-screen flex flex-col '>
            <NavBar />
            <div className='grow'>{children}</div>
            <Footer />
        </div>
    );
}

export default CommonLayout;
