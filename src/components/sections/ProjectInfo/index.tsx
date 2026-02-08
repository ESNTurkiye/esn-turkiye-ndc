import { ProjectInfoIntroduction } from "./ProjectInfoIntroduction";
import { ProjectInfoReportCard } from "./ProjectInfoReportCard";
import { useProjectInfoDocuments } from "./useProjectInfoDocuments";

export default function ProjectInfo() {
    const {
        isPolicyModalOpen,
        setIsPolicyModalOpen,
        isSurveyModalOpen,
        setIsSurveyModalOpen,
        handlePolicyClick,
        handleSurveyClick,
    } = useProjectInfoDocuments();

    return (
        <section className="bg-gray-50 text-gray-800 py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
                    <ProjectInfoIntroduction />
                    <ProjectInfoReportCard
                        onPolicyClick={handlePolicyClick}
                        onSurveyClick={handleSurveyClick}
                        isPolicyModalOpen={isPolicyModalOpen}
                        onPolicyModalClose={() => setIsPolicyModalOpen(false)}
                        isSurveyModalOpen={isSurveyModalOpen}
                        onSurveyModalClose={() => setIsSurveyModalOpen(false)}
                    />
                </div>
            </div>
        </section>
    );
}
