import { FC } from 'react';

interface Props {
	pageName: string;
}

export const HangDown: FC<Props> = ({ pageName }) => {
	return (
		<div
			className='
      absolute top-0 left-[-5%] xl:left-[-15%] hidden md:flex items-center gap-10
      translate-y-[-100%] translate-x-[3.9rem] rotate-90 origin-bottom-left'>
			<div className='h-px border-b border-light-gray w-[105px]'></div>
			<h3
				data-aos='zoom-out'
				className='text-light-gray tracking-[15px] leading-6 uppercase'>
				{pageName}
			</h3>
		</div>
	);
};
