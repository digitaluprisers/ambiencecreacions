import React from 'react';
import TermsConditions from '../sections/TermsConditions';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsConditionsPage = () => (
  <>
    <Header isSticky={false} />
    <main className="container mx-auto py-8 mt-20">
      <TermsConditions />
    </main>
    <Footer />
  </>
);

export default TermsConditionsPage; 