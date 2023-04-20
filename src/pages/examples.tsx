import type { NextPage } from 'next';
import Image from 'next/image';
const Gallery: NextPage = () => {
	return (
		<div className="container w-full px-6 md:w-4/6 mx-auto py-8">
			<h1 className="permanent-marker text-5xl font-bold text-blue-950 text-center bg-gradient-to-r from-white to-blue-200 rounded-lg py-4 mb-8">
				Playing Piano by Ear: Examples
			</h1>
			<div className="w-full mx-auto">
				<div className="pl-12 mb-8 md:float-right md:m-4">
					<Image
						src="/images/about-piano.jpg"
						alt="About Me"
						width={200}
						height={200}
						className="w-72 h-72 object-cover"
					/>
				</div>

				<div className="w-full md:w-7/12 md:pr-20 mt-12">
					<h3 className="text-2xl tracking-wide font-bold text-blue-950 mb-8">
						Imagine hearing any song and naturally playing it. You can.
					</h3>
					<p className="text-xl mb-4 mr-12 mb-24">
						Playing piano by ear refers to the ability to listen to a piece of
						music and then play it back on the piano without the need to read
						sheet music. There are many examples of famous pianists who are
						known for their exceptional ability to play by ear. Here are a few
						examples:
					</p>

					<div className="video-responsive mt-8 md:mt-12">
						<iframe
							className="w-full h-56 md:w-[800px] md:h-96"
							width="853"
							height="480"
							src={`https://www.youtube.com/embed/K6obNn3ji3c`}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="Embedded youtube"
						/>
					</div>
					<div className="video-responsive mt-8 md:mt-12">
						<iframe
							className="w-full h-56 md:w-[800px] md:h-96"
							width="853"
							height="480"
							src={`https://www.youtube.com/embed/cvefosbWV-Y`}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="Embedded youtube"
						/>
					</div>

					<div className="video-responsive mt-8 md:mt-12">
						<iframe
							className="w-full h-56 md:w-[800px] md:h-96"
							width="853"
							height="480"
							src={`https://www.youtube.com/embed/wVue1OG0MY4`}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="Embedded youtube"
						/>
					</div>
					<div className="video-responsive mt-8 md:mt-12">
						<iframe
							className="w-full h-56 md:w-[800px] md:h-96"
							width="853"
							height="480"
							src={`https://www.youtube.com/embed/p5HRR0eUOEY`}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="Embedded youtube"
						/>
					</div>
					<div className="video-responsive mt-8 md:mt-12">
						<iframe
							className="w-full h-56 md:w-[800px] md:h-96"
							width="853"
							height="480"
							src={`https://www.youtube.com/embed/KR71fkBhBSc`}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="Embedded youtube"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
