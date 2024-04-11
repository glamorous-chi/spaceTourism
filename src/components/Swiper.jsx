import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper/modules';

const Swipe = ({ crewMemberss }) => {
    return (
        <>

        <Swiper
            modules={[Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {crewMemberss.map((crewMember) => (
                <SwiperSlide key={crewMember.image}>
                    <img src={crewMember.image} alt="" style={{ width: "200px" }} />
                </SwiperSlide>
            ))}

        </Swiper>
        
        
                            
        </>
        

    )
}

export default Swipe