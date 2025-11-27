import React from 'react';
import Header from '../common/Header.jsx';
import Index from './Index.jsx';
import Footer from '../common/Footer.jsx';

function Layout () {
    return (
        <div>
            <Header />
            <Index />
            <Footer />
        </div>
    );
}

export default Layout;