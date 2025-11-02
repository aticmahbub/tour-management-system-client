import type {ReactNode} from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

interface IProps {
    children: ReactNode;
}

export default function CommonLayout({children}: IProps) {
    return (
        <div className=' min-h-screen flex flex-col'>
            <NavBar />
            <div className='grow'>{children}</div>
            <Footer />
        </div>
    );
}
