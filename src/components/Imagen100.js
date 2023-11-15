import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export default function Imagen100() {
  const imageUrls = [
    'https://i0.wp.com/www.clinicaperezvieco.com/wp-content/uploads/2020/01/terapia-online.jpg?fit=1418%2C792&ssl=1',
    'https://institutoinfodech.com/wp-content/uploads/2022/04/terapia-online.jpg',
    'https://terapiaapsicologica.com/wp-content/uploads/2020/12/Psychologist-bro.png',
    
    // Agrega más URLs de imágenes según sea necesario
  ];

  const textContent = [
    {
      categoryText: 'Terapia online',
      titleText: 'Descubre la solucion a tu bla bla ',
      descriptionText: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat 1.',
      learnMoreText: 'Aprende mas',
      likesText: '$80.000',
      commentsText: '6 1',
    },
    {
      categoryText: 'Terapia en pareja',
      titleText: 'Mejorar la comunicacíon es clave',
      descriptionText: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat 2.',
      learnMoreText: 'Precio',
      likesText: '1.2K 2',
      commentsText: '6 2',
    },
    {
      categoryText: 'Terapia presencial',
      titleText: 'Si necesitas un espacio, te lo puedo proporcionar ',
      descriptionText: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat 3.',
      learnMoreText: 'Precio',
      likesText: '$100.000',
      commentsText: '6 3',
    },
    // Agrega más objetos de contenido de texto según sea necesario
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500, // 1 segundo para la transición
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imageContainerStyle = {
    width: '100%',
    height: '100vh', // 100% de la altura de la pantalla
    overflow: 'hidden', // Ocultar el exceso de la imagen
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '100%', // 100% de la altura de su contenedor
    objectFit: 'cover', // Recortar la imagen automáticamente
    position: 'absolute',
    top: 0,
    left: 0,
  };

  return (
    <Slider {...sliderSettings}>
      {imageUrls.map((imageUrl, index) => (
        <div key={index}>
          <div className="container mx-auto" style={imageContainerStyle}>
            <Image src={imageUrl} alt={`Image ${index}`} style={imageStyle} />
            <div className="w-full md:w-1/2 lg:w-1/3" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <div className="h-full bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center relative">
                <div style={{backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: '10px', padding: '20px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)' }}>
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 responsive-text">{textContent[index].categoryText}</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 responsive-text">{textContent[index].titleText}</h1>
                  <p className="leading-relaxed mb-3 responsive-text">{textContent[index].descriptionText}</p>
                  <a className="text-indigo-500 inline-flex items-center responsive-text">
                    {textContent[index].learnMoreText}
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
