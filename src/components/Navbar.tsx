import { useEffect, useState } from 'react';
import { CloseIcon, HamburgerIcon, LogoIcon } from '../icons';

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [currentUrl, setCurrentUrl] = useState('/');

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		setCurrentUrl(location.pathname);
	}, []);

	return (
		<nav
			className='p-8 flex justify-between items-center relative
			md:py-14 md:px-20 md:gap-[6rem] md:justify-start
			lg:py-14 xl:px-0'>
			<a
				href='/'
				data-aos='fade-right'
				onClick={() => {
					if (!isMenuOpen) return;
					toggleMenu();
				}}>
				<LogoIcon color='#1B1D23' />
			</a>
			<button onClick={toggleMenu} className='md:hidden'>
				{isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
			</button>
			<ul
				className={`${isMenuOpen ? 'flex' : 'hidden'}
				bg-very-light-gray text-dark-blue font-bold p-12
				absolute w-[90%] top-[103px] flex-col gap-7
				text-lg md:hidden z-10`}>
				<li onClick={toggleMenu} className='cursor-pointer'>
					<a href='portfolio'>Portfolio</a>
				</li>
				<li onClick={toggleMenu} className='cursor-pointer'>
					<a href='about'>About Us</a>
				</li>
				<li onClick={toggleMenu} className='cursor-pointer'>
					<a href='contact'>Contact</a>
				</li>
			</ul>
			<ul data-aos='fade-right' className='hidden md:flex gap-12'>
				<li className='link'>
					<a
						href='portfolio'
						className={currentUrl === '/portfolio' ? 'text-dark-blue' : ''}>
						Portfolio
					</a>
				</li>
				<li className='link'>
					<a
						href='about'
						className={currentUrl === '/about' ? 'text-dark-blue' : ''}>
						About Us
					</a>
				</li>
				<li className='link'>
					<a
						href='contact'
						className={currentUrl === '/contact' ? 'text-dark-blue' : ''}>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};
