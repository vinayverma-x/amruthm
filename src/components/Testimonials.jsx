import avatar from '../assets/images/about/people.png';

const TESTIMONIALS = [
  {
    quote: "Amruth makes every project feel effortless and impactful.",
    feedback: "That was amazing! I loved the pancakes. I've never had that type of taste hit my mouth before. Unreal!",
    user: {
      avatar,
      name: "Jane Doe",
      company: "SomeCompany LLC.",
      link: "https://somecompanyllc.co"
    }
  },
  {
    quote: "He brings clarity and direction to every challenge.",
    feedback: "Working with Amruth changed the game for our team. He made every milestone achievable.",
    user: {
      avatar,
      name: "John Smith",
      company: "Beta Works",
      link: "https://betaworks.com"
    }
  },
  {
    quote: "Exceptional positivity and creative vision.",
    feedback: "His creative approach set the product apart and inspired everyone on the project.",
    user: {
      avatar,
      name: "Nina Patel",
      company: "Creative Leap",
      link: "https://creativeleap.co"
    }
  }
];

export default function Testimonials() {
  return (
    <section className="w-full mb-20 max-w-5xl mx-auto px-4 md:px-0">
      <h2 className="font-instrumentSans font-semibold text-3xl md:text-7xl mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] p-6 md:p-8 flex flex-col"
          >
            <div className="font-poppins font-semibold text-lg md:text-xl mb-4 text-black">
              "{testimonial.quote}"
            </div>
            <div className="text-sm md:text-base text-gray-700 mb-6 flex-grow">
              {testimonial.feedback}
            </div>
            <div className="flex items-center gap-4 mt-auto">
              <img
                src={testimonial.user.avatar}
                alt={testimonial.user.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-black"
              />
              <div>
                <div className="font-poppins font-semibold text-sm md:text-base text-black">
                  {testimonial.user.name}
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  {testimonial.user.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

