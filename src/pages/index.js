import React from 'react';
import PricingSection from '@components/PricingSection';
import Imagen100 from '../components/Imagen100';
import Informativo from '../components/Informativo';

export default function Home() {
  return (
    <>
      <Imagen100 />
      <Informativo />
      <PricingSection />
      {/* Agrega aquí otros componentes o contenido que desees */}
    </>
  );
}
