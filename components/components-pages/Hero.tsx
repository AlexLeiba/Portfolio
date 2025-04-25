'use client';
import React from 'react';
import { Col, Container, Row } from '@/components/UI/Grid';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Spacer } from '../UI/spacer/spacer';
import { FileDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themeContext';

function Hero() {
  const { darkMode } = useTheme();

  function handleDownloadPdf() {
    // pdf link
    const pdfUrl = process.env.NEXT_PUBLIC_PDF_LINK;

    const link = document.createElement('a');
    link.href = pdfUrl ? pdfUrl : '';
    link.download = 'alexandru-leiba-lapteacru-cv.pdf';
    link.click();
  }

  return (
    <Container
      variant={'fluid'}
      className={cn('relative overflow-hidden min-h-screen')}
    >
      <Row>
        <Col>
          {/* Background */}
          <div
            className={cn(
              darkMode ? 'backgroundDarkHero' : 'backgroundLightHero'
            )}
          ></div>
          {/* BLACK CIRCLE */}
          <div className='absolute lg:top-[450px]  left-[50%] md:top-[450px] sm:top-[calc(100vh-260px)] -translate-x-1/2 '>
            <div className=' relative lg:w-[450px] lg:h-[350px]  h-[350px] w-[400px] sm:w-[200px] sm:h-[400px]   '>
              <Image
                className='object-contain object-top'
                src={'/hero-illustration.avif'}
                alt='illustration'
                draggable='false'
                fill
              />
            </div>
          </div>
          <div
            className={cn(
              'top-[730px] sm:top-[calc(100vh-100px)]  ',
              'z-20 position absolute  w-[3000px]  h-full dark:bg-[radial-gradient(closest-side,_#000000_90%,#331d4e)] bg-[radial-gradient(closest-side,_#ffffff_90%,#bfe6f6_100%)] right-0 left-[50%]  rounded-[50%] -translate-x-1/2 '
            )}
          ></div>

          <div className=' flex justify-center flex-col items-center'>
            <div>
              <div className='font-bold text-center z-10 '>
                <div className='flex justify-center items-center gap-4'>
                  <h1 className=' text-white z-10'>Hello </h1>
                  <h1 className=' dark:text-primary-400 text-black z-10'>
                    there,
                  </h1>
                </div>
                <div className='flex justify-center items-center gap-4 flex-col'>
                  <div className='flex gap-2'>
                    <h2 className=' text-white z-10'>I am </h2>
                    <h2 className=' dark:text-primary-400 text-black z-10'>
                      Alex
                    </h2>
                  </div>

                  <p className=' body-lg z-10'>
                    I am a Front end developer driven to deliver software tools
                    that provide best experiences for users.
                  </p>
                </div>

                <div className='flex justify-center items-center flex-col  animation-delay-1000 animate-pulse mt-4'>
                  <div
                    className='flex flex-col justify-center items-center cursor-pointer drop-shadow-[#434242_0px_2px_15px] hover:drop-shadow-[white_0px_4px_10px] transition-all'
                    onClick={handleDownloadPdf}
                  >
                    <FileDown
                      width={50}
                      height={50}
                      className=' dark:text-white text-black'
                    />
                    <p>Download my cv pdf</p>
                  </div>
                </div>
              </div>

              {floatingIcons.map((iconData, index) => (
                <motion.div
                  drag
                  className={iconData.className}
                  animate={iconData.animate}
                  key={index}
                >
                  <Image
                    src={iconData.source}
                    width={iconData.width}
                    height={iconData.height}
                    alt='illustration'
                    draggable='false'
                    className={iconData.image.className}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;

export const floatingIcons = [
  {
    source: '/rocket.svg',
    width: 15,
    height: 15,
    animate: {
      translateY: 500,
      transition: { duration: 100 },
      translateX: -4000,
      rotate: -20,
      scale: -1,
    },
    className:
      'absolute top-[100px] right-[-200px]  rotate-10 animation-delay-1000 animate-pulse   transition-all  floating-icon-glow-animated ',
    image: {
      className: 'rotate-[225deg]',
    },
  },

  {
    source: '/categories/React.svg',
    width: 40,
    height: 40,
    animate: {
      translateX: 250,
      translateY: 20,
      rotate: 360,
      transition: { duration: 15 },
    },
    className:
      'absolute top-0 left-0 cursor-move hover:drop-shadow-[#6b8dff_0px_0px_10px] dark:hover:drop-shadow-[white_0px_0px_10px] transition-all',
    image: {
      className: '',
    },
  },
  {
    source: '/categories/NextJS.svg',
    width: 50,
    height: 50,
    animate: {
      translateY: 500,
      rotate: 20,
      transition: { duration: 20 },
      scale: 1,
    },
    className:
      'absolute top-0 right-0 cursor-move hover:drop-shadow-[#6b8dff_0px_0px_10px] dark:hover:drop-shadow-[white_0px_0px_10px] transition-all',
    image: {
      className: '',
    },
  },
  {
    source: '/categories/tailwind.svg',
    width: 25,
    height: 25,
    animate: {
      translateX: 110,
      rotate: 360,
      translateY: 100,
      transition: { duration: 20 },
    },
    className:
      'absolute top-[20%] -left-[100px] cursor-move hover:drop-shadow-[#6b8dff_0px_0px_10px] dark:hover:drop-shadow-[white_0px_0px_10px] transition-all',
    image: {
      className: '',
    },
  },
  {
    source: '/categories/TypeScript.svg',
    width: 25,
    height: 25,
    animate: {
      translateX: -150,
      rotate: 30,
      transition: { duration: 20 },
      scale: 1,
    },
    className:
      'absolute top-[5%] -right-[100px] sm:-right-[150px] cursor-move hover:drop-shadow-[#6b8dff_0px_0px_10px] dark:hover:drop-shadow-[white_0px_0px_10px] transition-all',
    image: {
      className: '',
    },
  },
  {
    source: '/categories/JavaScript.svg',
    width: 30,
    height: 30,
    animate: {
      translateX: 50,
      translateY: 60,
      transition: { duration: 20 },
    },
    className:
      'absolute top-[50%] -left-[50px] cursor-move hover:drop-shadow-[#6b8dff_0px_0px_10px] dark:hover:drop-shadow-[white_0px_0px_10px] transition-all',
    image: {
      className: '',
    },
  },
  {
    source: '/categories/CSS.svg',
    width: 30,
    height: 30,
    animate: {
      translateX: 100,
      rotate: 180,
      translateY: 100,

      transition: { duration: 20 },
      scale: -1,
    },
    className:
      'absolute top-[35%] -left-[50px] cursor-move hover:drop-shadow-[#6b8dff_0px_0px_10px] dark:hover:drop-shadow-[white_0px_0px_10px] transition-all',
    image: {
      className: '',
    },
  },
  {
    source: '/categories/HTML.svg',
    width: 30,
    height: 30,
    animate: {
      translateX: 60,
      rotate: 180,
      transition: { duration: 30 },
      scale: -1,
    },
    className:
      'absolute top-[50%] -left-[50px] cursor-move hover:drop-shadow-[#6b8dff_0px_0px_10px] dark:hover:drop-shadow-[white_0px_0px_10px] transition-all',
    image: {
      className: '',
    },
  },
];
