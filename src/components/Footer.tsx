import { useEffect, useState } from 'react';
import { ArrowIcon, LogoIcon } from '../icons';

export const Footer = () => {
	const [currentUrl, setCurrentUrl] = useState('/');

	useEffect(() => {
		setCurrentUrl(location.pathname);
	}, []);

	return (
		<footer
			className='bg-very-light-gray flex flex-col items-center mt-[8rem]
			md:flex-row md:gap-10 md:w-[80%] relative lg:gap-20'>
			<a
				href='/'
				className='bg-dark-blue p-7 lg:py-[5rem] lg:px-[3rem] md:py-10 translate-y-[-50px] md:translate-y-0'>
				<LogoIcon color='#FFF' />
			</a>
			<ul className='flex flex-col gap-8 md:flex-row'>
				<li className='link'>
					<a
						className={currentUrl === '/portfolio' ? 'text-dark-blue' : ''}
						href='portfolio'>
						Portfolio
					</a>
				</li>
				<li className='link'>
					<a
						className={currentUrl === '/about' ? 'text-dark-blue' : ''}
						href='about'>
						About Us
					</a>
				</li>
				<li className='link'>
					<a
						className={currentUrl === '/contact' ? 'text-dark-blue' : ''}
						href='contact'>
						Contact
					</a>
				</li>
			</ul>
			<a
				href='portfolio'
				className='btn w-[80%] mx-auto my-10 md:my-0 md:w-auto md:absolute right-[-20%]'>
				See Our Portfolio
				<ArrowIcon color='#FFF' />
			</a>
		</footer>
	);
};
