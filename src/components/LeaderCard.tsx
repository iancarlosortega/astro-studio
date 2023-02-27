import { FC, useEffect, useState } from 'react';
import { LinkedInIcon, TwitterIcon } from '../icons';

interface Props {
	leaderName: string;
	leaderJob: string;
	image: string;
}

export const LeaderCard: FC<Props> = ({ leaderName, leaderJob, image }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [desktopImage, setDesktopImage] = useState();

	useEffect(() => {
		import(`../assets/about/desktop/avatar-${image}.jpg`).then(img => {
			setDesktopImage(img.default);
		});
	}, [desktopImage]);

	const toggleHovered = (value: boolean) => {
		if (window.innerWidth < 992) return;
		setIsHovered(value);
	};

	return (
		<div data-aos='fade-left' className='p-8 md:p-0'>
			<div
				className='relative lg:cursor-pointer'
				onMouseEnter={() => toggleHovered(true)}
				onMouseLeave={() => toggleHovered(false)}>
				<img src={desktopImage} alt={leaderName} />
				{isHovered && (
					<div className='absolute bg-[#c7c7c7a8] flex items-center w-full h-full gap-6 top-0 left-0 justify-center'>
						<a href='https://www.linkedin.com/' target='_blank'>
							<LinkedInIcon />
						</a>
						<a
							className='flex items-center'
							href='https://www.twitter.com/'
							target='_blank'>
							<TwitterIcon />
						</a>
					</div>
				)}
			</div>
			<h5 className='text-dark-blue text-[18px] font-bold mt-6'>
				{leaderName}
			</h5>
			<p className='text-gray my-2'>{leaderJob}</p>
			<div className='flex gap-6 lg:hidden'>
				<a href='https://www.linkedin.com/' target='_blank'>
					<LinkedInIcon />
				</a>
				<a
					className='flex items-center'
					href='https://www.twitter.com/'
					target='_blank'>
					<TwitterIcon />
				</a>
			</div>
		</div>
	);
};
