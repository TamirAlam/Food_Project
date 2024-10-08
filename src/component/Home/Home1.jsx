import React from "react";

  function Home1() {
    return (
      <div>
        <section class="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
          <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
          <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 class="text-3xl font-extrabold sm:text-5xl">
                Let us find your
                <strong class="block font-extrabold text-[#49f39e]">
                  Forever Food.
                </strong>
              </h1>
              <p class="mt-4 max-w-lg sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>
              <div class="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  href="/hotel"
                  class="block w-full rounded-md bg-[#339966] px-12 py-3 text-sm font-bold text-white shadow hover:bg-[#1c6d45]  focus:outline-none focus:ring active:bg-[#339966] sm:w-auto"
                >
                  Search Now
                </a>
                <a
                  href="#"
                  class="black w-full rounded bg-white px-12 py-3 text-sm font-bold text-[#339966] shadow hover:text-[#47df93] focus:outline-none focus:ring active:text-[#339966] sm:w-auto"
                >
                  Know more
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }


export default Home1;
