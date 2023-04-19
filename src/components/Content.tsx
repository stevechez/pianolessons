import React from "react";
import type { NextPage } from "next";
import Image from "next/image";

const Content: NextPage = () => {
  return (
    <>
      <section className="w-full py-4 bg-gray-50">
        <div className="px-10 mx-auto max-w-7xl">
          <div className="px-10 my-8 text-center">
            <h2 className="font-black text-3xl">How We&apos;re different</h2>
          </div>
          <div className="grid overflow-hidden lg:rounded-xl">
            <div className="grid items-center lg:grid-cols-2">
              <div className="flex flex-col justify-center ">
                <p className="text-lg text-gray-600 mb-8 md:pr-12">
                  Learning piano by ear involves listening to a piece of music
                  and attempting to replicate it on the piano without relying on
                  written sheet music. This approach is more focused on the
                  aural and kinesthetic aspects of music learning, where the
                  pianist trains their ear to recognize notes, chords, and
                  progressions, and develops muscle memory through repetition
                  and practice. This method requires a strong sense of pitch and
                  rhythm, as well as an ability to improvise and adapt to
                  different styles and variations of music.
                </p>
              </div>
              <div className="overflow-hidden bg-gray-100 h-96">
                <Image
                  src="/images/content-1.jpg"
                  className="object-cover w-full h-full"
                  alt=""
                  width={250}
                  height={250}
                />
              </div>
            </div>

            <div className="grid items-center lg:grid-cols-2">
              <div className="order-last overflow-hidden bg-gray-100 h-96 lg:order-first">
                <Image
                  src="/images/content-2.jpg"
                  className="object-cover w-full h-full"
                  alt=""
                  width={250}
                  height={250}
                />
              </div>
              <div className="flex flex-col justify-center md:pl-12">
                <p className="text-lg text-gray-600 mb-8 md:pr-12">
                  In contrast, reading sheet music involves interpreting written
                  notation and translating it into sound on the piano. This
                  approach relies on visual and analytical skills, where the
                  pianist must be able to read and understand musical symbols,
                  note values, and other instructions written on the sheet
                  music. This method can be helpful for learning complex pieces
                  of music with precision, and it also allows pianists to
                  communicate and collaborate with other musicians who can read
                  sheet music.
                </p>
              </div>
            </div>

            <div className="grid items-center lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <p className="text-lg text-gray-600 mb-8 md:pr-12">
                  Overall, both approaches have their own advantages and
                  drawbacks, and many pianists use a combination of both methods
                  to develop a well-rounded set of skills.
                </p>
              </div>
              <div className="bg-gray-100 h-96">
                <Image
                  src="/images/content-3.jpg"
                  className="object-cover w-full h-full"
                  alt=""
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
