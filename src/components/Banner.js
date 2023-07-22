import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import img1 from '../asset/bg.jpg';
import img2 from '../asset/about-bg.jpg';

export const Banner = () => {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={img1}
        alt='...'
      >
        <div className='bg-dark'>
          <h3 className='text-start'>THIS IS A PLACE WHERE TECHNOLOGY &</h3>
          <h3 className='text-start'>CREATIVITY FUSED INTO DIGITAL CHEMISTERY</h3>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={img2}
        alt='...'
      >
        <div className='bg-dark'>
          <h3 className='text-start'>WE DON'T HAVE THE BEST BUT WE HAVE THE</h3>
          <h3 className='text-start'>GREATEST TEAM</h3>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}