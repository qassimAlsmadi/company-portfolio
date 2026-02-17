export default function Skills() {
  return (
    <section
      id='skills'
      className='py-24 bg-slate-900 text-white px-6'
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center text-indigo-400 mb-16'>
          Core Expertise
        </h2>

        <div className='grid md:grid-cols-3 gap-10'>
          {/* Strategy */}
          <div className='bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500 transition'>
            <h3 className='text-xl font-semibold text-indigo-400 mb-4'>
              Strategy & Planning
            </h3>
            <ul className='space-y-3 text-gray-400'>
              <li>• Monthly Content Planning</li>
              <li>• Content Calendar Development</li>
              <li>• Brand Positioning Alignment</li>
              <li>• Campaign Structuring</li>
            </ul>
          </div>

          {/* Content */}
          <div className='bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500 transition'>
            <h3 className='text-xl font-semibold text-indigo-400 mb-4'>
              Content Creation
            </h3>
            <ul className='space-y-3 text-gray-400'>
              <li>• Caption & Copywriting</li>
              <li>• Reels Ideas & Trend Research</li>
              <li>• Visual Content Coordination</li>
              <li>• Engagement Optimization</li>
            </ul>
          </div>

          {/* Analytics */}
          <div className='bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500 transition'>
            <h3 className='text-xl font-semibold text-indigo-400 mb-4'>
              Analytics & Optimization
            </h3>
            <ul className='space-y-3 text-gray-400'>
              <li>• Performance Tracking</li>
              <li>• Engagement Analysis</li>
              <li>• Reach & Growth Monitoring</li>
              <li>• Continuous Strategy Improvement</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
