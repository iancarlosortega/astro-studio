import { useForm } from 'react-hook-form';
import { ArrowIcon } from '../icons';

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: any) => {
		console.log(data);
		reset();
	};

	const isInvalidForm = () => {
		if (errors.name || errors.email || errors.message) {
			return true;
		}
	};

	return (
		<section className='px-4 py-10 md:px-0 lg:grid lg:grid-cols-[30%_70%] gap-5'>
			<h2 data-aos='fade-right' className='text-3xl my-[3rem] lg:mt-0'>
				Connect with us
			</h2>
			<form data-aos='fade-left' onSubmit={handleSubmit(onSubmit)}>
				<input
					className={`
            w-full my-5 px-5 py-3 font-bold outline-none border-b border-b-dark-blue
            placeholder:font-bold placeholder:text-dark-gray text-[18px] 
						${errors.name && 'placeholder:text-red text-red border-b-red'}
            `}
					type='text'
					placeholder='Name'
					{...register('name', {
						required: true,
						minLength: 3,
					})}
				/>
				<input
					className={`
            w-full my-5 px-5 py-3 font-bold outline-none border-b border-b-dark-blue
            placeholder:font-bold placeholder:text-dark-gray text-[18px] 
						${errors.email && 'placeholder:text-red text-red border-b-red'}
            `}
					type='text'
					placeholder='Email Address'
					{...register('email', {
						required: true,
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'Invalid email address',
						},
					})}
				/>
				<textarea
					className={`
            w-full my-5 px-5 py-3 font-bold outline-none border-b border-b-dark-blue
            placeholder:font-bold placeholder:text-dark-gray text-[18px]
            max-h-[8rem] 
						${errors.message && 'placeholder:text-red text-red border-b-red'}
            `}
					placeholder='Your Message'
					rows={1}
					{...register('message', {
						required: true,
						minLength: 5,
					})}
				/>
				<div
					className={`flex justify-end ${
						isInvalidForm() ? 'justify-between' : 'justify-end'
					}`}>
					{isInvalidForm() && (
						<span className='text-red font-bold'>Complete all the fields!</span>
					)}
					<button className='bg-dark-blue p-8'>
						<ArrowIcon color='#FFF' />
					</button>
				</div>
			</form>
		</section>
	);
};
