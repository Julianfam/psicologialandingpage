import React from 'react';
import GaleriaIntro from '../components/GarleriaIntro';
import Imagen100 from '../components/Imagen100';
import Informativo from '../components/Informativo'

export default function Home() {
  return (
    <>
      <Imagen100 />
      <Informativo />
      <GaleriaIntro />
      {/* Agrega aquí otros componentes o contenido que desees */}
    </>
  );
}
