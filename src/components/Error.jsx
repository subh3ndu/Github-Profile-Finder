import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Error({ err }) {
    return (
        <>
            <Header />
            <div className="container">Sorry ${err} while finding the user</div>
            <Footer />
        </>
    );
}

export default Error;
