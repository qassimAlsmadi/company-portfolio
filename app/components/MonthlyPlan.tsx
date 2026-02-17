export default function MonthlyPlan() {
  return (
    <section className='py-24 bg-slate-900 text-white px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center text-indigo-400 mb-16'>
          Monthly Content Plan Preview
        </h2>

        {/* Strategy Explanation */}
        <div className='mb-16 text-center max-w-3xl mx-auto'>
          <p className='text-gray-300 text-lg leading-relaxed'>
            This is a structured 4-week Instagram content strategy designed to
            increase engagement, authority, and conversions through content
            variety and behavioral triggers.
          </p>
        </div>

        {/* Weekly Grid */}
        <div className='grid md:grid-cols-4 gap-6 mb-20'>
          {[
            {
              week: 'Week 1',
              focus: 'Brand Awareness',
              content: 'Educational Post + Reel Trend + Engagement Story',
            },
            {
              week: 'Week 2',
              focus: 'Authority Building',
              content: 'Case Study Post + Value Carousel + Reel',
            },
            {
              week: 'Week 3',
              focus: 'Community Growth',
              content: 'Interactive Post + Behind the Scenes + Reel',
            },
            {
              week: 'Week 4',
              focus: 'Conversion',
              content: 'Offer Post + Testimonial + Strong CTA Reel',
            },
          ].map((item, index) => (
            <div
              key={index}
              className='bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500 transition'
            >
              <h3 className='text-indigo-400 font-semibold mb-2'>
                {item.week}
              </h3>
              <p className='text-gray-300 text-sm mb-2'>
                <strong>Focus:</strong> {item.focus}
              </p>
              <p className='text-gray-500 text-sm'>{item.content}</p>
            </div>
          ))}
        </div>

        {/* Caption Example */}
        <div className='bg-slate-950 p-8 rounded-2xl border border-slate-800'>
          <h3 className='text-2xl font-semibold text-indigo-400 mb-4'>
            Caption Example (High Engagement Structure)
          </h3>

          <p className='text-gray-300 leading-relaxed mb-4'>
            “Your content isn’t failing… your strategy is.
            <br />
            <br />
            Posting randomly won’t grow your brand. What you need is:
            <br />
            ✔ Clear positioning ✔ Structured content calendar ✔ Hook-driven
            captions ✔ Data-based improvements
            <br />
            <br />
            Growth is not luck — it’s strategy.
            <br />
            <br />
            Save this post if you&apos;re serious about scaling 🚀”
          </p>

          <p className='text-gray-500 text-sm'>
            Structure Used: Hook → Problem → Solution Framework → CTA
          </p>
        </div>
      </div>
    </section>
  );
}
