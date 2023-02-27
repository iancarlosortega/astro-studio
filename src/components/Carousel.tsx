import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from './';
import 'swiper/css';
import 'swiper/css/pagination';
import paramourDesktopImage from '../assets/home/desktop/image-hero-paramour.jpg';
import paramourTabletImage from '../assets/home/tablet/image-hero-paramour.jpg';
import paramourMobileImage from '../assets/home/mobile/image-hero-paramour.jpg';
import seraphDesktopImage from '../assets/home/desktop/image-hero-seraph.jpg';
import seraphTabletImage from '../assets/home/tablet/image-hero-seraph.jpg';
import seraphMobileImage from '../assets/home/mobile/image-hero-seraph.jpg';
import federalDesktopImage from '../assets/home/desktop/image-hero-federal.jpg';
import federalTabletImage from '../assets/home/tablet/image-hero-federal.jpg';
import federalMobileImage from '../assets/home/mobile/image-hero-federal.jpg';
import trinityDesktopImage from '../assets/home/desktop/image-hero-trinity.jpg';
import trinityTabletImage from '../assets/home/tablet/image-hero-trinity.jpg';
import trinityMobileImage from '../assets/home/mobile/image-hero-trinity.jpg';

export const Carousel = () => {
	return (
		<Swiper
			modules={[Pagination, Autoplay]}
			speed={1000}
			loop
			pagination={{
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return `<span class="${className}">
							<h5>0${index + 1}</h5>
						</span>`;
				},
			}}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}>
			<SwiperSlide>
				<Slide
					title='Project Paramour'
					body='Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.'
					desktopImage={paramourDesktopImage}
					tabletImage={paramourTabletImage}
					mobileImage={paramourMobileImage}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Slide
					title='Seraph Station'
					body='The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.'
					desktopImage={seraphDesktopImage}
					tabletImage={seraphTabletImage}
					mobileImage={seraphMobileImage}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Slide
					title='Federal II Tower'
					body='A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.'
					desktopImage={federalDesktopImage}
					tabletImage={federalTabletImage}
					mobileImage={federalMobileImage}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Slide
					title='Trinity Bank Tower'
					body='Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.'
					desktopImage={trinityDesktopImage}
					tabletImage={trinityTabletImage}
					mobileImage={trinityMobileImage}
				/>
			</SwiperSlide>
			<div className='swiper-pagination'></div>
		</Swiper>
	);
};
