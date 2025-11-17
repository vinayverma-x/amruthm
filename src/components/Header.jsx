import author from '../assets/images/amruthhomepg.png'

export default function Header() {
  return (
    <section className="relative flex flex-col items-center text-center mt-12 mb-20 w-full px-4 overflow-x-visible">
      {/* Container with name above image */}
      <div className="relative flex flex-col items-center w-fit my-12 overflow-visible">
        {/* Name - Large, bold, positioned ABOVE image */}
        <h1
          className="font-poppins font-bold text-black mb-4"
          style={{
            fontSize: "clamp(4rem, 10vw, 10.5rem)",
            lineHeight: "1.1",
          }}
        >
          Amruth
        </h1>

        {/* Portrait Image Container with labels positioned outside */}
        <div className="relative -mt-35">
          <img
            src={author}
            alt="Amruth Huigere"
            draggable={false}
            className="object-cover"
            style={{
              width: "clamp(300px, 40vw, 800px)",
              height: "clamp(300px, 40vw, 800px)",
            }}
          />
          
          {/* Left side labels - overlapping on image */}
          <div className="hidden md:block absolute left-0 top-0 h-full">
            {/* Entrepreneur - at eye level, overlapping image */}
            <div className="absolute top-[40%] flex flex-col items-start right-0 -mr-8 md:-mr-12 lg:-mr-57">
              <div className="text-left font-poppins font-semibold text-sm md:text-base lg:text-lg text-black whitespace-nowrap mb-1">
                Entrepreneur
              </div>
              <div className="w-24 md:w-32 lg:w-60 h-[1px] bg-black"></div>
            </div>
            {/* Podcast Host - below eye level, overlapping image */}
            <div className="absolute top-[60%] flex flex-col items-start right-0 -mr-8 md:-mr-12 lg:-mr-27">
              <div className="text-left font-poppins font-semibold text-sm md:text-base lg:text-lg text-black whitespace-nowrap mb-1">
                Podcast Host
              </div>
              <div className="w-24 md:w-32 lg:w-60 h-[1px] bg-black"></div>
            </div>
          </div>

          {/* Right side labels - overlapping on image */}
          <div className="hidden md:block absolute right-0 top-0 h-full">
            {/* Venture Building - at eye level, overlapping image */}
            <div className="absolute top-[40%] flex flex-col items-end left-0 -ml-8 md:-ml-12 lg:-ml-57">
              <div className="text-right font-poppins font-semibold text-sm md:text-base lg:text-lg text-black whitespace-nowrap mb-1">
                Venture Building
              </div>
              <div className="w-24 md:w-32 lg:w-60 h-[1px] bg-black"></div>
            </div>
            {/* Growth Strategy - below eye level, overlapping image */}
            <div className="absolute top-[60%] flex flex-col items-end left-0 -ml-8 md:-ml-12 lg:-ml-27">
              <div className="text-right font-poppins font-semibold text-sm md:text-base lg:text-lg text-black whitespace-nowrap mb-1">
                Growth Strategy
              </div>
              <div className="w-24 md:w-32 lg:w-60 h-[1px] bg-black"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder of 4 Ventures - Large, bold */}
      <div className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-3">
        Founder of 4 Ventures
      </div>

      {/* Tagline - Smaller, regular weight */}
      <div className="font-poppins text-lg md:text-xl lg:text-2xl text-black font-normal mb-16">
        Entrepreneur . Podcaster . Creator
      </div>

      {/* About Me Section */}
      <div className="w-full mt-20 px-6 md:px-32">
        <h2 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-8 text-left">
          About Me
        </h2>
        <p className="font-poppins text-base md:text-lg lg:text-xl text-black leading-relaxed text-left">
          Led by emotion, driven by purpose. I have a soft spot for deep conversations, beautiful details, and making people feel truly comfortable in their space. I dive headfirst into everything I do followed by true intention, intensity, and an unwavering belief that it will work. I don't just aim to win, I strive to be the best at whatever I commit to. And I believe it means nothing if it doesn't elevate not just myself but those around me too. Relentless when it matters and inclusive by nature, I build real connections and look for the magic in everyone. Whether it's a team or simply being present with people I bring all of me. Heart first, always.
        </p>
      </div>
    </section>
  )
}
