const teamMembers = [
    {
      name: "Efe Berke",
      role: "NB Responsible",
      image: null
    },
    {
      name: "Sedanur",
      role: "Main Chair",
      image: null
    },
    {
      name: "Deniz Gülse",
      role: "Vice Chair of Int. Helpline",
      image: null
    },
    {
      name: "Yusuf",
      role: "Vice Chair of Strategy Team",
      image: null
    }
  ];
  
  const Team = () => {
    return (
      <section id="team" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-esn-dark-blue font-bold tracking-widest text-sm uppercase">Meet the People</span>
            <h2 className="text-4xl font-display font-bold text-gray-900 mt-2 uppercase">
              Behind the <span className="text-esn-cyan">Project</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto font-body">
              The dedicated team from the National Development Committee working to identify and report mobility barriers.
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8" role="list">
            {teamMembers.map((member, index) => (
              <article key={index} className="flex flex-col items-center text-center group">
                <div className="w-32 h-32 mb-6 rounded-full bg-gray-200 border-4 border-white shadow-lg flex items-center justify-center overflow-hidden group-hover:border-esn-cyan transition-colors duration-300" aria-hidden="true">
                  {member.image ? (
                    <img src={member.image} alt={`${member.name}, ${member.role}`} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-3xl font-bold text-gray-400" aria-hidden="true">{member.name[0]}</span>
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