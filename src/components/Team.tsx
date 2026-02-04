const teamMembers = [
    {
      name: "Sedanur Demiral",
      role: "NDC Main Chair",
      image: "https://esnturkiye.github.io/esn-assets/images/team/sedanur.jpeg"
    },
    {
      name: "Ömer Çavuşoğlu",
      role: "NDC Survey Team Vice Chair",
      image: "https://esnturkiye.github.io/esn-assets/images/team/omer.jpeg"
    },
    {
      name: "Efe Berke Akkaya",
      role: "ESN Türkiye President",
      image: "https://esnturkiye.github.io/esn-assets/images/team/efe-berke.jpeg"
    }
  ];
  
  const Team = () => {
    return (
      <section id="team" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-esn-dark-blue font-bold tracking-widest text-sm uppercase">Meet the People</span>
            <h2 className="text-4xl font-display font-bold text-gray-900 mt-2 uppercase">
              Behind the <span className="text-esn-cyan">Project: 25/26</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto font-body">
              The dedicated team from the National Development Committee working to identify and report mobility barriers.
            </p>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" role="list">
            {teamMembers.map((member, index) => (
              <article key={index} className="flex flex-col items-center text-center group">
                <div className={`w-32 h-32 mb-6 rounded-full border-4 border-white shadow-lg shadow-esn-dark-blue/15 flex items-center justify-center overflow-hidden group-hover:border-esn-cyan group-hover:shadow-xl group-hover:shadow-esn-cyan/25 transition-all duration-300 ${member.image ? 'bg-gray-200' : 'bg-esn-light-blue/10'}`}>
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={`ESN Türkiye National Development Committee - Barriers of Mobility Team member: ${member.name}, ${member.role}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="text-3xl font-bold text-esn-dark-blue" aria-hidden="true">{member.name[0]}</span>
                  )}
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900">{member.name}</h3>
                <p className="text-esn-magenta text-sm font-bold uppercase tracking-wide mt-1">{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Team;