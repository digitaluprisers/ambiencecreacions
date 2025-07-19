import React from 'react';
import PrivacyPolicy from '../sections/PrivacyPolicy';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => (
  <>
    <Header isSticky={false} />
    <main className="container mx-auto py-8 mt-20">
      <PrivacyPolicy />
    </main>
    <Footer />
  </>
);

export default PrivacyPolicyPage; 