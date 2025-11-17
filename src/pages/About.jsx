import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LetsTalk from "../components/LetsTalk";
import Testimonials from "../components/Testimonials";
import author from '../assets/images/about/human.png';
import ph1 from '../assets/images/about/philosophy-icons/ic1.png';
import ph2 from '../assets/images/about/philosophy-icons/ic2.png';
import ph3 from '../assets/images/about/philosophy-icons/ic3.png';
import ph4 from '../assets/images/about/philosophy-icons/ic4.png';
import ph5 from '../assets/images/about/philosophy-icons/ic5.png';
import ph6 from '../assets/images/about/philosophy-icons/ic6.png';
import glow from '../assets/images/Glow.png';
import grid from '../assets/images/about/philosophy-icons/grid.png';
import spot1 from '../assets/images/about/new1.png';
import spot2 from '../assets/images/about/new2.png';
import spot3 from '../assets/images/about/new3.png';

const PHILOSOPHY = [
  {
    icon: ph1,
    title: 'Compassion',
    desc: 'I believe real impact begins with understanding people, their needs, struggles, and aspirations. Compassion drives me to create meaningful connections and support others in their journey.',
  },
  {
    icon: ph2,
    title: 'Care',
    desc: 'I approach everything with genuine care and attention to detail. Whether it\'s a project, a relationship, or a moment, I bring my full presence and dedication.',
  },
  {
    icon: ph3,
    title: 'Collaboration',
    desc: 'The best ideas come alive when diverse minds work together with trust and openness. I thrive in collaborative environments where everyone\'s voice matters.',
  },
  {
    icon: ph4,
    title: 'Inclusive',
    desc: 'I believe in creating spaces where everyone feels valued and heard. Inclusion isn\'t just a goal—it\'s the foundation of how I build teams and communities.',
  },
  {
    icon: ph5,
    title: 'Integrity',
    desc: 'I value honesty and consistency, doing the right thing even when no one is watching. Integrity guides every decision I make, both personally and professionally.',
  },
  {
    icon: ph6,
    title: 'Idealistic',
    desc: 'I hold onto big dreams and believe in the power of vision. Being idealistic means I never stop striving for better—for myself, my team, and the world around me.',
  }
];

const WHATS_NEW_CARDS = [
  {
    image: spot1,
    title: "I've always learned a lot connecting to people, launched a podcast platform for everyone to share",
    desc: "Link to Podcast",
    link: "https://open.spotify.com/show/6AWOMzqEdELr4PY6UH20nJ?si=a922a170c096421e"
  },
  {
    image: spot2,
    title: "Collaborating with Tag Unlimited to help deliver uniforms to educational institutes across the country for free",
    desc: "Link to Podcast",
    link: "#"
  },
  {
    image: spot3,
    title: "Expanding MSEPL to the middle east",
    desc: "Link to Podcast",
    link: "#"
  }
];

const authorName = "Amruth , a.k.a. Amro ";
const authorDescription = (
  <span className="font-poppins text-base md:text-lg">
    Led by emotion, driven by purpose.&nbsp;I have a soft spot for deep conversations, beautiful details, and making people feel truly comfortable in their space.<br />
    I dive headfirst into everything I do followed by true intention, intensity, and an unwavering belief that it will work.&nbsp;I don’t just aim to win, I strive to be the best at whatever I commit to.&nbsp;And I believe it means nothing if it doesn't elevate not just myself but those around me too.<br />
    Relentless when it matters and inclusive by nature, I build real connections and look for the magic in everyone.&nbsp;Whether it's a team, or simply being present with people I bring all of me.&nbsp;Heart first, always.
  </span>
);

export default function About() {
  const nameRef = useRef(null);
  const [lineWidth, setLineWidth] = useState(0);
  const [active, setActive] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    function updateWidth() {
      if (nameRef.current) setLineWidth(nameRef.current.offsetWidth);
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const venturesLabels = [
    "MSEPL",
    "Highlighter Stationer",
    "Heart of it with Amruth",
    "Amroya",
    "Highlighter Apparel"
  ];

  return (
    <section className="w-full min-h-screen bg-white flex flex-col px-0 md:px-0">
      <Navbar />

      <main className="flex-1 w-full max-w-[1100px] mx-auto py-10 px-0">

        {/* HEADER / AUTHOR */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-12 mb-16 md:mb-28">
          {/* AUTHOR IMAGE */}
          <div className="w-full md:w-2/5 flex justify-center relative min-w-[120px] sm:min-w-[160px] md:min-w-[230px] mb-6 md:mb-0">
            <img src={glow} alt="" className="absolute left-1/2 top-1/2 w-[180px] xs:w-[250px] sm:w-[300px] md:w-[410px] h-auto"
              style={{
                filter: "blur(45px)",
                opacity: 0.8,
                zIndex: 0,
                transform: "translate(-50%, -50%)"
              }}
            />
            <div className="relative w-full max-w-[410px]">
              <img
                src={author}
                alt={authorName}
                className="block w-full rounded-xl object-contain"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 78%, rgba(0,0,0,0) 100%), linear-gradient(to right, black 88%, rgba(0,0,0,0) 100%)',
                  maskImage: 'linear-gradient(to bottom, black 78%, rgba(0,0,0,0) 100%), linear-gradient(to right, black 88%, rgba(0,0,0,0) 100%)',
                  WebkitMaskSize: '100% 100%, 100% 100%',
                  maskSize: '100% 100%, 100% 100%',
                  WebkitMaskRepeat: 'no-repeat, no-repeat',
                  maskRepeat: 'no-repeat, no-repeat',
                  WebkitMaskComposite: 'source-in',
                  maskComposite: 'intersect'
                }}
                draggable={false}
              />
            </div>
          </div>
          {/* AUTHOR TEXT */}
          <div className="w-full md:w-3/5 flex flex-col items-center md:items-start justify-center">
            <div ref={nameRef} className="font-poppins font-semibold text-2xl md:text-2xl mb-4 tracking-wide text-center md:text-left">
              {authorName}
              <div className="h-1 bg-black rounded-full mt-2"
                style={{ width: lineWidth, maxWidth: "100%", transition: "width 0.2s" }}
              />
            </div>
            <h1 className="font-poppins font-extrabold text-3xl xs:text-4xl md:text-5xl mb-6 text-center md:text-left">
              Human Being
            </h1>
            <div className="font-inter text-base xs:text-lg md:text-lg text-justify px-4 md:text-left">
              {authorDescription}
            </div>
          </div>
        </div>

        {/* VENTURE BUTTONS */}
        <div className="mt-8 px-4 w-full mb-16 flex flex-col gap-y-4 md:flex-row md:justify-center md:items-center md:gap-x-8 md:gap-y-0 md:max-w-5xl md:mx-auto">
  {venturesLabels.map((label) => (
    <button
      key={label}
      className="h-14 w-full md:w-[200px] flex items-center justify-center rounded-[10px] border border-black font-poppins text-base shadow-[3px_3px_0_0_rgba(0,0,0,1)] whitespace-nowrap bg-white text-black hover:bg-black hover:text-white transition-colors duration-200"
      style={{ fontWeight: 400, flexShrink: 0, flexGrow: 0 }}
      type="button"
    >
      {label}
    </button>
  ))}
</div>

        {/* MY COMPASS FULL CONTENT */}
        <section className="mb-20 md:mb-28 max-w-5xl mx-auto px-4 md:px-0">
          <h2 className="text-left font-instrumentSans font-semibold text-3xl md:text-7xl mb-10">My Compass</h2>
          <div className="relative max-w-4xl mx-auto px-0">
            <img
              src={grid}
              alt=""
              className="hidden md:block absolute left-1/2 top-1/2 w-[105%] md:w-[112%] h-full -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
              style={{ zIndex: 0, opacity: 0.8 }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10 px-0">
              {PHILOSOPHY.map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center">
                  <img src={item.icon} alt="" className="w-14 h-14 mb-4" />
                  <div className="font-bold text-lg md:text-xl mb-2 font-poppins">{item.title}</div>
                  <div className="text-base text-gray-600 font-inter">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT'S NEW FULL CONTENT */}
        <section className="mb-20 md:mb-28 max-w-5xl mx-auto px-4 md:px-0">
          <h2 className="text-left font-instrumentSans font-semibold text-3xl md:text-7xl mb-10">What's new ?</h2>
          <div className="font-inter text-center text-black text-sm md:text-base mt-2 mb-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {WHATS_NEW_CARDS.map((card, i) => (
              <div
                key={i}
                className="rounded-xl border border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white flex flex-col items-center px-5 pb-6 pt-5 break-words"
              >
                <div className="w-full mb-4 flex items-center justify-center bg-black rounded" style={{ height: '190px' }}>
                  <img src={card.image} alt="" className="rounded-xl max-h-full max-w-full object-contain block" style={{ borderRadius: 6 }} />
                </div>
                <div className="font-poppins mb-2 text-left w-full break-words">{card.title}</div>
                {i === 0 && (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-poppins text-xs text-black text-left bg-black text-white px-6 py-2 rounded shadow-[3px_3px_0_0_rgba(0,0,0,1)] mt-auto hover:bg-gray-800 transition "
                    style={{ display: 'inline-block' }}
                  >
                    {card.desc}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <Testimonials />
      </main>
        <LetsTalk />
      <Footer />
    </section>
  );
}
