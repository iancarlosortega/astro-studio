import { FC } from 'react';

interface Props {
	title: string;
	subtitle: string;
	body: string;
	desktopImage: string;
	tabletImage: string;
	mobileImage: string;
	isCustomBlack?: boolean;
	opacity?: string;
}
export const PageInformation: FC<Props> = ({
	title,
	subtitle,
	body,
	desktopImage,
	tabletImage,
	mobileImage,
	isCustomBlack = true,
	opacity = '60',
}) => {
	return (
		<main className='relative'>
			<div
				data-aos='fade-right'
				className={`${
					isCustomBlack ? 'bg-dark-blue' : 'bg-[black]'
				} lg:bg-[white]`}>
				<picture
					className={`opacity-${opacity} block h-60 md:h-full lg:opacity-100 lg:w-[60%]`}>
					<source media='(min-width: 992px)' srcSet={desktopImage} />
					<source media='(min-width: 768px)' srcSet={tabletImage} />
					<img className='object-cover h-full w-full' srcSet={mobileImage} />
				</picture>
			</div>
			<div
				data-aos='fade-right'
				className='
					bg-[white] px-4 pb-10 pt-20 w-[90%] translate-y-[-35px]
					md:absolute right-0 bottom-0 md:px-14 md:pt-[10rem] md:translate-y-0
					lg:w-[55%] lg:pl-[10rem] lg:pt-[10rem]'>
				<h1
					className='
						hidden md:block absolute top-[-20%] right-5
					  text-5xl text-right text-very-light-gray capitalize
						lg:text-6xl'>
					{title}
				</h1>
				<h2 className='text-xl md:text-3xl lg:mb-12'>{subtitle}</h2>
				<p className='text-gray'>{body}</p>
			</div>
		</main>
	);
};
