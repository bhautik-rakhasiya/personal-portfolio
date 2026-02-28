import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="relative z-[1] min-h-screen">{children}</main>
    <Footer />
  </>
);

export default Layout;
