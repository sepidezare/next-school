export default function Hero2() {
  return (

      <section className="relative bg-[#19232d] text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#073e4a] via-[#19232d] to-[#01a08e] opacity-90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Learn Anytime, Anywhere <br />
            <span className="text-[#2dffe6]">Boost Your Skills</span>
          </h1>

          <p className="text-lg lg:text-xl text-[#edf7e7] mb-8 max-w-lg">
            Join thousands of learners worldwide. Access top-quality online courses designed to help you grow personally and professionally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#courses"
              className="px-6 py-3 rounded-2xl text-lg font-semibold bg-[#01a08e] hover:bg-[#2dffe6] hover:text-[#000] transition shadow-lg"
            >
              Browse Courses
            </a>

            <a
              href="#signup"
              className="px-6 py-3 rounded-2xl text-lg font-semibold border-2 border-[#2dffe6] text-[#2dffe6] hover:bg-[#2dffe6] hover:text-[#000] transition"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* SVG Illustration */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-96 h-96">
            <span className="absolute -top-6 -left-6 w-16 h-16 bg-[#2dffe6] rounded-full blur-2xl opacity-70" />
            <span className="absolute bottom-6 -right-6 w-20 h-20 bg-[#01a08e] rounded-full blur-2xl opacity-50" />

            <img
              src="/images/why.webp"
              alt="Online Learning Illustration"
              className="relative w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}