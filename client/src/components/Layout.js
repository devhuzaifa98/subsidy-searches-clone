import React from 'react'
import Logo from './shared/Logo'
import Footer from './shared/Footer'

const Layout = ({ children }) => {
    return (
        <section className='h-screen max-h-screen overflow-y-auto flex flex-col'>
            <Logo />
            <main className='container mx-auto pb-8 flex-1'>
                {children}
            </main>
            <Footer />
        </section>
    )
}

export default Layout
