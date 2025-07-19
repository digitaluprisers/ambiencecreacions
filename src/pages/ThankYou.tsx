import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ThankYou = () => (
  <>
    <Header isSticky={false} />
    <main className="container mx-auto py-16 mt-20 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg">Your request has been received. We will contact you soon to confirm your site visit.</p>
    </main>
    <Footer />
  </>
);

export default ThankYou; 