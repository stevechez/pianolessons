const CourseOutline = () => {
	return (
		<div className="max-w-2xl mx-auto p-4 mt-8">
			<h1 className="text-4xl font-bold mb-4">Play Piano by Ear</h1>
			<h2 className="text-2xl font-bold mb-2">Course Description:</h2>
			<p className="mb-4 text-xl">
				This course is designed for students who want to learn how to play piano
				by ear, without solely relying on sheet music. Through a series of
				lessons, students will develop their listening skills, natural sense of
				rhythm, and the ability to improvise. The course is tailored to each
				student&apos;s needs and goals, and it covers a variety of musical
				styles and techniques.
			</p>
			<h2 className="text-2xl font-bold mb-2">Course Outline:</h2>
			<ul className="list-disc list-inside mb-4">
				<li className="mb-2">
					<span className="font-bold">Lesson 1:</span> Introduction to playing
					by ear
					<ul className="list-disc list-inside ml-4">
						<li>Understanding the basics of music theory</li>
						<li>Developing your listening skills</li>
						<li>Learning to recognize chord progressions</li>
					</ul>
				</li>
				<li className="mb-2">
					<span className="font-bold">Lesson 2:</span> Developing your natural
					sense of rhythm
					<ul className="list-disc list-inside ml-4">
						<li>Exploring different rhythms and time signatures</li>
						<li>Practicing syncopation and swing</li>
						<li>Learning to play with feeling and expression</li>
					</ul>
				</li>
				<li className="mb-2">
					<span className="font-bold">Lesson 3:</span> Improvisation techniques
					<ul className="list-disc list-inside ml-4">
						<li>Understanding the basics of improvisation</li>
						<li>Learning to create melodies and harmonies</li>
						<li>Practicing improvisation in different musical styles</li>
					</ul>
				</li>

				<li className="mb-2">
					<span className="font-bold">Lesson 4:</span> Playing by ear in
					different musical genres
					<ul className="list-disc list-inside ml-4">
						<li>
							Exploring different musical genres, such as jazz, blues, and pop
						</li>
						<li>Learning to play by ear in each genre</li>
						<li>Analyzing and deconstructing songs in each genre</li>
					</ul>
				</li>
				<li className="mb-2">
					<span className="font-bold">Lesson 5:</span> Developing a practice
					routine
					<ul className="list-disc list-inside ml-4">
						<li>Setting practice goals and objectives</li>
						<li>Learning to practice effectively</li>
						<li>
							Incorporating play-by-ear techniques into your practice routine
						</li>
					</ul>
				</li>
				<li className="mb-2">
					<span className="font-bold">Lesson 6:</span> Performance skills
					<ul className="list-disc list-inside ml-4">
						<li>Preparing for a performance</li>
						<li>Overcoming performance anxiety</li>
						<li>Developing stage presence and charisma</li>
					</ul>
				</li>
				<li className="mb-2">
					<span className="font-bold">Lesson 7:</span> Advanced techniques
					<ul className="list-disc list-inside ml-4">
						<li>Advanced improvisation techniques</li>
						<li>Playing complex chord progressions by ear</li>
						<li>Applying play-by-ear techniques to your own compositions</li>
					</ul>
				</li>
				<li className="mb-2">
					<span className="font-bold">Lesson 8:</span> Conclusion
					<ul className="list-disc list-inside ml-4">
						<li>Reviewing the course material</li>
						<li>Setting future practice and performance goals</li>
						<li>Continuing to develop your play-by-ear skills on your own</li>
					</ul>
				</li>
			</ul>
			<p>
				<p className="text-lg text-center font-normal">
					Note: The course outline can be adjusted based on the student&apos;s
					skill level, goals, and preferences.
				</p>
			</p>
		</div>
	);
};

export default CourseOutline;