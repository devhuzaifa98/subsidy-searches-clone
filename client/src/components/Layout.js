import React from 'react';
import Footer from './shared/Footer';
import Logo from './shared/Logo';

const Layout = ({ children }) => {
    return (
        <section className="flex h-screen max-h-screen flex-col overflow-y-auto">
            <Logo className='sm:!justify-center' />
            <main className="container mx-auto flex-1 pb-8">{children}</main>
            <Footer />
        </section>
    );
};

export default Layout;
