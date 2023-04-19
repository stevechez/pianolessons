import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

const Cta: NextPage = () => {
  return (
    <>
      <section className="flex flex-col w-full overflow-hidden bg-white lg:flex-row sm:mx-auto border border-gray-40">
        <div className="flex justify-end p-8 md:ml-48 bg-blue-50">
          <div className="flex flex-col items-start justify-center w-full lg:max-w-lg">
            <h2 className="text-xl font-bold text-blue-900">
              CALL NOW: 650-793-8244
            </h2>
            <p className="py-3 mb-3 text-gray-700 text-lg">
              Contact me today to schedule an in-home or virtual lesson and take
              your piano playing to the next level!
            </p>

            <h2 className="text-xl font-bold uppercase text-blue-900">
              Area Served
            </h2>
            <p className="py-3 mb-3 text-gray-600 text-lg">
              Santa Cruz County or Virtual
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-blue-500 rounded shadow-md sm:w-auto sm:mr-4 sm:mb-0 focus:shadow-outline focus:outline-none hover:bg-blue-700"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1578554700872-ef0e27c46d37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2934&amp;q=80"
            alt="Hero Image"
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
        </div>
      </section>
    </>
  );
};

export default Cta;
