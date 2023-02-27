import { FC } from 'react';
import { ArrowIcon } from '../icons';

interface Props {
	title: string;
	body: string;
	desktopImage: string;
	tabletImage: string;
	mobileImage: string;
}

export const Slide: FC<Props> = ({
	title,
	body,
	desktopImage,
	tabletImage,
	mobileImage,
}) => {
	return (
		<div className='h-[34rem] md:h-[45rem] bg-dark-blue'>
			<picture className='opacity-40'>
				<source media='(min-width: 992px)' srcSet={desktopImage} />
				<source media='(min-width: 768px)' srcSet={tabletImage} />
				<img className='object-cover h-full w-full' srcSet={mobileImage} />
			</picture>
			<div className='lg:w-[80%] lg:pl-[190px] p-10 md:p-20 h-full flex flex-col justify-center absolute top-0 z-10'>
				<h2 className='text-[white] text-2xl md:text-4xl'>{title}</h2>
				<p className='my-5 text-[white]'>{body}</p>
				<a href='portfolio' className='btn mt-10'>
					See Our Portfolio
					<ArrowIcon color='#FFF' />
				</a>
			</div>
		</div>
	);
};
