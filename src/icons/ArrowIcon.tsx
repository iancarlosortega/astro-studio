import { FC } from 'react';

interface Props {
	color: string;
}

export const ArrowIcon: FC<Props> = ({ color }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='26' height='20'>
			<g fill='none' fillRule='evenodd' stroke={color} strokeWidth='2'>
				<path d='M15 1l9 9-9 9M0 10h24' />
			</g>
		</svg>
	);
};
