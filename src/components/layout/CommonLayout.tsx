import type {ReactNode} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

interface IProps {
    children: ReactNode;
}

function CommonLayout({children}: IProps) {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    );
}

export default CommonLayout;
