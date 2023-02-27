import { FC } from 'react';

interface Props {
	projectName: string;
	desktopImage: string;
	tabletImage: string;
	mobileImage: string;
	effect: string;
	projectNumber?: number;
	projectDate?: string;
}

export const PortfolioCard: FC<Props> = ({
	projectName,
	projectNumber,
	projectDate,
	effect,
	desktopImage,
	tabletImage,
	mobileImage,
}) => {
	// TODO: Navigate to URL
	// const handleClick = () => {
	// 	window.location = 'http://www.google.com';
	// };

	return (
		<div data-aos={effect}>
			<div className='relative bg-dark-blue hover:bg-[gray] transition duration-200 ease-in'>
				<picture className='opacity-50'>
					<source media='(min-width: 992px)' srcSet={desktopImage} />
					<source media='(min-width: 768px)' srcSet={tabletImage} />
					<img className='object-cover h-full w-full' srcSet={mobileImage} />
				</picture>
				<div className='absolute bottom-5 left-5 md:bottom-10 md:left-10'>
					<h4 className='font-bold capitalize mb-2 text-[white] text-lg'>
						{projectName}
					</h4>
					{projectDate ? (
						<p className='text-[white]'>{projectDate}</p>
					) : (
						<a
							href='portfolio'
							className='opacity-75 font-medium text-[white] text-[15px]'>
							View All Projects
						</a>
					)}
				</div>
				{projectNumber && (
					<h6 className='hidden md:block text-[white] text-[200px] font-bold absolute right-5 top-[45%] lg:top-[25%] opacity-75'>
						{projectNumber}
					</h6>
				)}
			</div>
		</div>
	);
};
