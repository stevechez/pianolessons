const PianoFaq = () => {
  return (
    <div className="mt-6 mb-20 md:my-20">
      <h1 className="text-3xl font-bold text-blue-950 text-center mb-10">
        FAQs
      </h1>
      <div className="accordion flex flex-col items-center justify-center mb-6">
        {/* <!--  Panel 1  --> */}
        <div className="w-full md:w-10/12">
          <input type="checkbox" name="panel" id="panel-1" className="hidden" />
          <label
            htmlFor="panel-1"
            className="relative block bg-gray-200 text-black p-4 shadow border-b border-grey"
          >
            What is learning piano by ear?
          </label>
          <div className="accordion__content overflow-hidden border border-l-gray-400 border-r-gray-400">
            <p
              className="text-gray-900 dark:text-gray-900 p-4 text-base"
              id="panel1"
            >
              Learning piano by ear is a method of playing the piano without
              relying on written sheet music. Instead, the pianist listens to a
              piece of music and attempts to replicate it on the piano by
              identifying the notes, chords, and progressions through their
              sense of pitch and rhythm.
            </p>
          </div>
        </div>
        {/* <!--  Panel 2  --> */}
        <div className="w-full md:w-10/12">
          <input type="checkbox" name="panel" id="panel-2" className="hidden" />
          <label
            htmlFor="panel-2"
            className="relative block bg-gray-200 text-black p-4 shadow border-b border-grey"
          >
            What are the benefits of learning piano by ear?
          </label>
          <div className="accordion__content overflow-hidden border border-l-gray-400 border-r-gray-400">
            <p className="text-gray-900 dark:text-gray-900 p-4">
              Learning piano by ear can improve a pianist&apos;s aural and
              kinesthetic skills, allowing them to develop a stronger sense of
              pitch, rhythm, and muscle memory. This method can also enhance a
              pianist&apos;s ability to improvise, adapt to different styles and
              variations of music, and communicate with other musicians who may
              not read sheet music. .
            </p>
          </div>
        </div>
        {/* <!--  Panel 3  --> */}
        <div className="w-full md:w-10/12">
          <input type="checkbox" name="panel" id="panel-3" className="hidden" />
          <label
            htmlFor="panel-3"
            className="relative block bg-gray-200 text-black p-4 shadow border-b border-grey"
          >
            Do I need any previous musical experience to learn piano by ear?
          </label>
          <div className="accordion__content overflow-hidden border border-l-gray-400 border-r-gray-400">
            <p className="text-gray-900 dark:text-gray-900 p-4">
              While previous musical experience can be helpful, it is not
              necessary to learn piano by ear. Anyone can start by listening to
              their favorite songs and attempting to replicate them on the
              piano. With practice and patience, pianists can develop their
              aural and kinesthetic skills and become proficient in playing by
              ear.
            </p>

            <p className="text-gray-900 dark:text-gray-900 p-4">
              Quality Results: Professional window cleaners have the experience,
              equipment, and cleaning solutions needed to achieve a
              high-quality, streak-free finish that may be difficult to achieve
              with DIY methods.
            </p>
            <p className="text-gray-900 dark:text-gray-900 p-4">
              Safety: Cleaning windows, particularly on tall buildings or
              hard-to-reach areas, can be dangerous. Professional window
              cleaners are trained and equipped to safely clean windows at
              heights and in difficult-to-reach areas.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-900 p-4">
              Time-Saving: Cleaning windows can be a time-consuming process,
              especially if you&apos;re not familiar with the proper techniques
              and tools. Hiring a professional can save you time and hassle,
              allowing you to focus on other tasks or activities.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-900 p-4">
              Long-Term Savings: Regular window cleaning can help extend the
              life of your windows by preventing buildup of dirt, grime, and
              other debris that can cause damage over time. This can save you
              money in the long run by reducing the need for expensive repairs
              or replacements.
            </p>

            <p className="mb-2 text-gray-500 dark:text-gray-900 p-4">
              While previous musical experience can be helpful, it is not
              necessary to learn piano by ear. Anyone can start by listening to
              their favorite songs and attempting to replicate them on the
              piano. With practice and patience, pianists can develop their
              aural and kinesthetic skills and become proficient in playing by
              ear.
            </p>
          </div>
        </div>
        {/* <!--  Panel 4  --> */}
        <div className="w-full md:w-10/12">
          <input type="checkbox" name="panel" id="panel-4" className="hidden" />
          <label
            htmlFor="panel-4"
            className="relative block bg-gray-200 text-black p-4 shadow border-b border-grey"
          >
            Can I still learn how to read sheet music if I learn piano by ear?
          </label>
          <div className="accordion__content overflow-hidden border border-l-gray-400 border-r-gray-400">
            <p className="text-gray-900 dark:text-gray-900 p-4">
              Yes, learning piano by ear and reading sheet music are not
              mutually exclusive. Many pianists use a combination of both
              methods to improve their overall musical abilities. Learning piano
              by ear can help pianists develop their aural and kinesthetic
              skills, while learning how to read sheet music can enhance their
              visual and analytical skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PianoFaq;
