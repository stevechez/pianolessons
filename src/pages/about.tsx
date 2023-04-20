import type { NextPage } from 'next';
import Image from 'next/image';
const about: NextPage = () => {
	return (
		<div className="container w-full mx-auto">
			<h1 className="permanent-marker text-5xl font-bold text-blue-950 text-center my-8 bg-gradient-to-r from-white to-blue-200 rounded-lg py-4 mx-4">
				About
			</h1>
			<div className="w-10/12 mx-auto">
				<div className="pl-12 mb-8 md:float-right md:m-4">
					<Image
						src="/images/about-piano.jpg"
						alt="About Me"
						width={300}
						height={300}
						className="w-96 h-96 object-cover"
					/>
				</div>
				<h1 className="text-2xl text-left font-bold text-blue-950 text-center my-6">
					Welcome to my piano teaching service!
				</h1>
				<p className="text-xl mb-4 w-full mr-12">
					My name is Steve, and I&apos;m a passionate and experienced piano
					teacher who specializes in teaching students how to play by ear.
					Unlike traditional piano instruction that relies heavily on sheet
					music, my approach is based on developing listening skills, a natural
					sense of rhythm, and the ability to improvise. I believe that music is
					a language that can be learned and spoken fluently by anyone,
					regardless of their age or background.
				</p>
				<p className="text-xl mb-4 w-full mr-12">
					My lessons are tailored to each student&apos;s goals, interests, and
					learning style. I take a patient and encouraging approach, and I
					strive to create a fun and engaging learning environment that inspires
					my students to practice and improve. Whether you&apos;re a beginner or
					an intermediate player, I&apos;m here to help you develop your musical
					skills, build your confidence, and reach your full potential as a
					pianist.
				</p>
				<h4 className="permanent-marker text-xl text-blue-950 text-center mt-12">
					Contact me today to schedule a lesson and start your musical journey!
				</h4>
			</div>
		</div>
	);
};

export default about;
