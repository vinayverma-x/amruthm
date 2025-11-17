import adv1 from '../assets/images/about/adventures1.png';
import adv1_1 from '../assets/images/about/adventures1.1.png';
import adv1_2 from '../assets/images/about/adventures1.2.png';
import adv2 from '../assets/images/about/adventures2.png';
import adv2_1 from '../assets/images/about/adventures2.1.png';
import adv3 from '../assets/images/about/adventures3.png';
import adv3_1 from '../assets/images/about/adventures3.1.png';

export default function AdventuresAndLore() {
  return (
    <section className="w-full bg-white relative flex flex-col pt-16 md:pt-32 pb-0">
      <h2 className="font-instrumentSans font-semibold text-3xl md:text-5xl lg:text-7xl text-left text-black mb-6 md:mb-12 w-full px-6 md:px-32 relative z-10">
        Adventures and Lore
      </h2>
      <div className="w-full px-6 md:px-32 pb-16">
        <div className="w-full bg-white rounded-xl border border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]  p-8 mb-10 flex flex-col gap-4">
        <div className="flex items-start gap-8 mb-4 flex-wrap md:flex-nowrap">
          <div className="relative w-24 h-24 flex-shrink-0">
            <div className="absolute left-3 top-3 w-24 h-24 rounded-full bg-black z-0"></div>
            <div className="absolute left-0 top-0 w-24 h-24 rounded-full border border-black bg-white flex items-center justify-center text-4xl font-semibold z-10">1</div>
          </div>
          <div>
            <div className="font-poppins font-semibold text-2xl md:text-3xl mb-2">
              President Rotaract Club of Vidyaranyapura
            </div>
            <div className="text-base md:text-lg">
              <b>(Project Pragathi Prothasha)</b> Successfully distributed free school supplies to 2000 primary school students through a community fundraiser. What started as an idea is still alive to this day through the Rotaract Club of Vidyaranyapura, still doing it's part for the community. Massive gratitude to everyone involved
              <br /><br />
              <b>(Project Eco Friendly Clay Ganesha)</b> Reached 10,000 children and 18 schools, an environment awareness workshop to make clay idols by hand to reduce impact for a massive festival
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-8 pt-2 flex-wrap">
          <img src={adv1} alt="" className="w-full max-w-[320px] md:w-64 md:h-52 object-cover rounded-lg transition-all" />
          <img src={adv1_1} alt="" className="w-full max-w-[320px] md:w-64 md:h-52 object-cover rounded-lg transition-all" />
          <img src={adv1_2} alt="" className="w-full max-w-[320px] md:w-64 md:h-52 object-cover rounded-lg transition-all" />
        </div>
        </div>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* CARD 2 */}
          <div className="bg-white rounded-xl border border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] p-8 flex flex-col gap-4">
            <div className="flex items-start gap-6 mb-3">
              <div className="relative w-16 h-16 flex-shrink-0">
                <div className="absolute left-2 top-2 w-16 h-16 rounded-full bg-black z-0"></div>
                <div className="absolute left-0 top-0 w-16 h-16 rounded-full border border-black bg-white flex items-center justify-center text-2xl font-semibold z-10">2</div>
              </div>
              <div>
                <div className="font-poppins font-semibold text-xl mb-1">Excellence in Community Impact – Party in Pink Collaboration</div>
                <div className="text-sm md:text-base">Party in Pink Collaboration, an initiative by Rotaract JP Nagar, a community project to raise funds for breast cancer through awareness</div>
              </div>
            </div>
            <div className="flex justify-center pt-2">
              <img src={adv2} alt="" className="w-full max-w-[320px] md:w-64 md:h-40 object-cover rounded-lg transition-all" />
            </div>
          </div>
          {/* CARD 3 */}
          <div className="bg-white rounded-xl border border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]  p-8 flex flex-col gap-4">
            <div className="flex items-start gap-6 mb-3">
              <div className="relative w-16 h-16 flex-shrink-0">
                <div className="absolute left-2 top-2 w-16 h-16 rounded-full bg-black z-0"></div>
                <div className="absolute left-0 top-0 w-16 h-16 rounded-full border border-black bg-white flex items-center justify-center text-2xl font-semibold z-10">3</div>
              </div>
              <div>
                <div className="font-poppins font-semibold text-xl mb-1">Promising President awarded by the Rotaract District Council</div>
                <div className="text-sm md:text-base">Honoring a president who has demonstrated future-ready leadership, active service, and a strong commitment to the ideals of Rotaract.</div>
              </div>
            </div>
            <div className="flex justify-center pt-2">
              <img src={adv3} alt="" className="w-full max-w-[320px] md:w-64 md:h-40 object-cover rounded-lg transition-all" />
            </div>
          </div>
          {/* CARD 4 */}
          <div className="bg-white rounded-xl border border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] p-8 flex flex-col gap-4">
            <div className="flex items-start gap-6 mb-3">
              <div className="relative w-16 h-16 flex-shrink-0">
                <div className="absolute left-2 top-2 w-16 h-16 rounded-full bg-black z-0"></div>
                <div className="absolute left-0 top-0 w-16 h-16 rounded-full border border-black bg-white flex items-center justify-center text-2xl font-semibold z-10">4</div>
              </div>
              <div>
                <div className="font-poppins font-semibold text-xl mb-1">People's leader recognition by the community</div>
                <div className="text-sm md:text-base">Awarded in honor of exceptional leadership, dedication, and the ability to inspire and uplift the community through meaningful contributions.</div>
              </div>
            </div>
            <div className="flex justify-center pt-2">
              <img src={adv2_1} alt="" className="w-full max-w-[320px] md:w-64 md:h-40 object-cover rounded-lg transition-all" />
            </div>
          </div>
          {/* CARD 5 */}
          <div className="bg-white rounded-xl border border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] p-8 flex flex-col gap-4">
            <div className="flex items-start gap-6 mb-3">
              <div className="relative w-16 h-16 flex-shrink-0">
                <div className="absolute left-2 top-2 w-16 h-16 rounded-full bg-black z-0"></div>
                <div className="absolute left-0 top-0 w-16 h-16 rounded-full border border-black bg-white flex items-center justify-center text-2xl font-semibold z-10">5</div>
              </div>
              <div>
                <div className="font-poppins font-semibold text-xl mb-1">President BNI Kingfishers 2025</div>
                <div className="text-sm md:text-base">Honoring exemplary leadership in guiding BNI Kingfishers toward stronger connections, increased opportunities, and impactful business networking. </div>
              </div>
            </div>
            <div className="flex justify-center pt-2">
              <img src={adv3_1} alt="" className="w-full max-w-[320px] md:w-64 md:h-40 object-cover rounded-lg transition-all" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

