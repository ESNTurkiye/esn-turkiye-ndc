export function TeamSectionHeader() {
    return (
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="text-esn-dark-blue font-bold tracking-widest text-xs sm:text-sm uppercase">
                Meet the People
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mt-2 uppercase leading-tight">
                Behind the{" "}
                <span className="text-esn-cyan block sm:inline">Project: 25/26</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-600 max-w-2xl mx-auto font-body text-sm sm:text-base px-4">
                The dedicated team from the National Development Committee working to identify and
                report mobility barriers.
            </p>
        </div>
    );
}