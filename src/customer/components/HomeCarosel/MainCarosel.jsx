import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCaroselData';

const MainCarousel = () => {
    // const navigate=useNavigation
    const items = MainCarouselData.map((item) => <img className='cursor-pointer -z-10' role='presentation' src={item.image} alt="" />)
    return (
        <div>
            < AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                animationDuration={3500}
                animationType='slide'
                infinite
            />
        </div>
        
    )
};
    export default MainCarousel