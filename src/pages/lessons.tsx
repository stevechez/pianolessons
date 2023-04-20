import Image from 'next/image';

const Lessons = () => {
	return (
		<div>
			<div className="container w-full md:w-9/12 mx-auto">
				<h1 className="permanent-marker text-5xl font-bold text-blue-950 text-center my-8 bg-gradient-to-r from-white to-blue-200 rounded-lg py-4 mx-4">
					Lessons
				</h1>
				<div className="w-full">
					<div className="px-12 md:mr-12">
						<span className="md:float-right md:m-6">
							<div
								className="
              "
							>
								<Image
									className="rounded mb-12 inline"
									src="/images/content-2.jpg"
									width={400}
									height={500}
									alt=""
								/>
							</div>
							<div className="">
								<Image
									className="rounded mb-12 inline"
									src="/images/lessons-2.jpg"
									width={400}
									height={500}
									alt=""
								/>
							</div>
						</span>
						<p className="text-xl font-semibold mb-4 pt-6">
							If you&apos;re looking for a piano teacher who can help you play
							by ear rather than solely relying on sheet music, look no further!
							Our piano teacher service offers personalized lessons tailored to
							each individual&apos;s goals and learning style.
						</p>
						<p className="text-lg mb-4">
							Our experienced instructor has a deep understanding of music
							theory and can help students develop their listening skills and
							natural sense of rhythm. Whether you&apos;re a beginner or an
							intermediate player, we can help you build a strong foundation and
							develop your ability to play by ear.
						</p>
						<p className="text-lg">
							With our guidance, you&apos;ll be able to learn your favorite
							songs, improvise, and even compose your own music! Contact us
							today to schedule a lesson and start your musical journey.
						</p>

						<h2 className="mt-8 text-2xl font-blue-950 font-bold mb-4">
							In-home or Virtual Instruction
						</h2>
						<p className="text-xl mb-14 md:mb-72">
							Welcome to my in-home piano instruction service! My name is Steve,
							and I&apos;m an experienced and passionate piano teacher who
							specializes in teaching students how to play by ear. With my
							in-home lessons, I come to you and provide personalized
							instruction in the comfort of your own home. My approach is
							tailored to each individual student&apos;s needs and goals, and my
							lessons are designed to help you develop your listening skills,
							natural sense of rhythm, and the ability to improvise. I provide
							clear and detailed instruction, and I use a variety of teaching
							methods and materials to keep our lessons fun, engaging, and
							productive. With my in-home piano lessons, you don&apos;t have to
							worry about commuting or finding a suitable practice space. You
							can learn in the comfort of your own home and enjoy the
							convenience of having a personal piano instructor. Whether
							you&apos;re a beginner or an intermediate player, I&apos;m here to
							guide you on your musical journey and help you reach your full
							potential.
						</p>
						<h4 className="permanent-marker text-2xl font-blue-950 font-bold text-center px-8 md:px-32">
							Contact me today to schedule an in-home or virtual lesson and take
							your piano playing to the next level!
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Lessons;
