import PDFModal from "@/components/shared/PDFModal";
import { DOCUMENT_CONFIG } from "./projectInfoData";
import { DocumentActionButtons } from "./DocumentActionButtons";
import { KeyAchievementsList } from "./KeyAchievementsList";

interface ProjectInfoReportCardProps {
    onPolicyClick: () => void;
    onSurveyClick: () => void;
    isPolicyModalOpen: boolean;
    onPolicyModalClose: () => void;
    isSurveyModalOpen: boolean;
    onSurveyModalClose: () => void;
}

export function ProjectInfoReportCard({
    onPolicyClick,
    onSurveyClick,
    isPolicyModalOpen,
    onPolicyModalClose,
    isSurveyModalOpen,
    onSurveyModalClose,
}: ProjectInfoReportCardProps) {
    return (
        <div id="report-2025">
            <div className="bg-white shadow-lg shadow-esn-dark-blue/10 p-6 sm:p-8 md:p-10 relative overflow-hidden hover:shadow-xl hover:shadow-esn-dark-blue/20 transition-shadow duration-300 paper-fold">
                <div className="absolute top-0 right-0 w-48 h-48 bg-esn-dark-blue/5 rounded-full blur-3xl -z-10" />

                <div className="relative z-10">
                    <span className="bg-esn-magenta text-white text-[10px] sm:text-xs font-bold px-3 py-1 mb-4 inline-block rounded-full">
                        INSIGHTS & REPORTS
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 uppercase text-gray-900">
                        Evidence-Based Research on{" "}
                        <span className="text-esn-dark-blue">Student Visa Barriers</span>
                    </h2>

                    <div className="space-y-4 mb-6 sm:mb-8">
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                            The previous edition of Barriers of Mobility achieved significant
                            milestones in understanding visa challenges faced by the Erasmus
                            Generation.
                        </p>
                        <KeyAchievementsList />
                    </div>

                    <DocumentActionButtons
                        onPolicyClick={onPolicyClick}
                        onSurveyClick={onSurveyClick}
                    />

                    <PDFModal
                        isOpen={isPolicyModalOpen}
                        onClose={onPolicyModalClose}
                        title={DOCUMENT_CONFIG.policyPaper.modalTitle}
                        pdfPath={DOCUMENT_CONFIG.policyPaper.path}
                    />
                    <PDFModal
                        isOpen={isSurveyModalOpen}
                        onClose={onSurveyModalClose}
                        title={DOCUMENT_CONFIG.surveyReport.modalTitle}
                        pdfPath={DOCUMENT_CONFIG.surveyReport.path}
                    />
                </div>
            </div>
        </div>
    );
}