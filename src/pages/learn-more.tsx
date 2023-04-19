import Image from 'next/image';

const LearnMore = () => {
	return (
		<>
			<section className="mt-12">
				<h1 className="text-5xl font-black text-blue-950 text-center mb-10">
					Learn More
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

					<p className="text-xl mb-4 w-full mr-12">
						I offer piano lessons primarily for beginner and intermediate
						students, children and adults.
					</p>

					<p className="text-xl mb-4 w-full mr-12">
						It is extremely important for a student and a teacher to feel
						comfortable and see if they are a great match. Once mutual trust is
						established we can discuss the length and frequency of the lessons,
						depending on the students&quot; needs and abilities.
					</p>

					<p className="text-xl mb-4 w-full mr-12">
						We offer onsite learning in Santa Cruz County, as well as,
						virtually. With the convenience of modern technology, I offer
						personalized piano lessons through Zoom from the comfort of your own
						home. My approach is tailored to each individual student&apos;s
						needs and goals, and my lessons are designed to help you develop
						your listening skills, natural sense of rhythm, and the ability to
						improvise.
					</p>
					<h2 className="text-2xl font-semibold mt-4 mb-4">
						Benefits of learning to play piano by ear.
					</h2>
					<ul className="list-disc list-inside mb-4 text-xl">
						<li className="mb-2">
							<span className="font-bold">Increased musical freedom:</span>{' '}
							Learning to play by ear can give you more freedom to play what you
							want, when you want, without needing to rely on sheet music or
							others to tell you what to play.
						</li>
						<li className="mb-2">
							<span className="font-bold">Improved improvisation skills: </span>{' '}
							Playing by ear often involves improvisation, which can help you
							develop your creativity and ability to play in different styles
							and situations.
						</li>
						<li className="mb-2">
							<span className="font-bold">Enhanced listening skills: </span>{' '}
							When you learn to play by ear, you learn to listen more closely to
							the music you&apos;re playing, which can help you develop a deeper
							appreciation and understanding of it.
						</li>
						<li className="mb-2">
							<span className="font-bold">Greater musical versatility:</span>{' '}
							Playing by ear can allow you to play a wider variety of music, as
							you&apos;re not limited to the pieces that are available in sheet
							music form.
						</li>
						<li className="mb-2">
							<span className="font-bold">Improved memory: </span> Playing by
							ear requires you to memorize music, which can help improve your
							memory skills overall.
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default LearnMore;
