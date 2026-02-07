import { useState } from "react";
import PDFModal from "@/components/shared/PDFModal";
import { useAnalytics } from "@/hooks/useAnalytics";
import { isMobileDevice } from "@/utils/device";
import { openPDF } from "@/utils/pdf";

const ProjectInfo = () => {
    const { trackDocumentAction, trackButtonClick } = useAnalytics();
    const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
    const [isSurveyModalOpen, setIsSurveyModalOpen] = useState(false);

    const handlePolicyClick = () => {
        trackDocumentAction("view", "policy-paper-2025.pdf");
        trackButtonClick("view_policy_paper", "project_info_section");

        if (isMobileDevice()) {
            openPDF("/documents/policy-paper-2025.pdf");
        } else {
            setIsPolicyModalOpen(true);
        }
    };

    const handleSurveyClick = () => {
        trackDocumentAction("view", "survey-report-2024.pdf");
        trackButtonClick("view_survey_report", "project_info_section");

        if (isMobileDevice()) {
            openPDF("/documents/survey-report-2025.pdf");
        } else {
            setIsSurveyModalOpen(true);
        }
    };

    return (
        <section className="bg-gray-50 text-gray-800 py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
                    <div id="introduction" className="flex flex-col justify-center">
                        <span className="text-esn-green font-bold tracking-widest text-xs sm:text-sm uppercase mb-2 block">
                            Project Overview
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6 uppercase text-gray-900">
                            What is{" "}
                            <span className="text-esn-dark-blue">Barriers of Mobility?</span>
                        </h2>
                        <div className="space-y-6">
                            <p className="text-gray-600 font-body leading-relaxed text-base sm:text-lg">
                                The{" "}
                                <strong className="text-gray-900">
                                    &quot;Barriers of Mobility: Visa Issues for Non-EU
                                    Students&quot;
                                </strong>{" "}
                                survey focuses on understanding how visa and residence permit
                                procedures affect the mobility experiences of{" "}
                                <strong className="text-gray-900">
                                    non-EU students and young people participating in international
                                    programmes
                                </strong>{" "}
                                such as Erasmus+ the European Solidarity Corps (ESC), ESN events
                                and other mobility opportunities, with particular attention to{" "}
                                <strong className="text-gray-900">non-EU student mobility</strong>{" "}
                                across Europe.
                            </p>
                            <p className="text-gray-600 font-body leading-relaxed text-base sm:text-lg">
                                By collecting first hand experiences the survey examines the
                                level of information and institutional support provided during
                                visa processes the challenges faced in applications and
                                approvals, processing times, rejection reasons and the overall
                                impact of visa related issues on participants&apos; motivation,
                                satisfaction and programme experience.{" "}
                                <strong className="text-gray-900">
                                    The survey aims to identify structural barriers within current
                                    mobility systems
                                </strong>{" "}
                                and provide evidence based insights to{" "}
                                <strong className="text-gray-900">
                                    improve accessibility, fairness and inclusivity in
                                    international mobility for non-EU participants
                                </strong>
                                .
                            </p>
                            <h3>
                                <span className="text-esn-dark-blue font-bold">
                                    2026 Edition Overview
                                </span>
                            </h3>
                            <p className="text-gray-600 font-body leading-relaxed text-base sm:text-lg">
                                This year&apos;s survey represents a fundamental redesign
                                compared to the previous edition, shifting from a descriptive,
                                experience-based questionnaire to a structured, policy-oriented
                                data collection tool. While last year&apos;s survey primarily
                                documented whether participants faced visa difficulties and how
                                they perceived the process, the new edition systematically
                                analyses how visa and residence permit regimes influence access
                                to mobility, decision-making, financial planning, wellbeing, and
                                perceptions of equality. The scope has been significantly
                                expanded to include full degree students alongside short-term
                                mobility participants, allowing the survey to reflect real and
                                diverse mobility pathways. The new structure captures the entire
                                visa journey—from pre-application motivation and institutional
                                guidance to appointment access, visa appointment delays, costs,
                                processing times, outcomes, appeals, and post-arrival residence
                                permit challenges and residence permit bottlenecks—enabling the
                                identification of concrete bottlenecks and institutional
                                responsibilities. Greater emphasis is placed on the role and
                                quality of support provided by sending institutions, host
                                institutions, consulates, and visa centres, moving beyond simple
                                satisfaction measures toward accountability. Additionally, the
                                survey now explicitly measures the academic, financial,
                                psychological, and equality-related impacts of visa procedures,
                                transforming individual experiences into robust evidence of
                                structural barriers. Overall, the new edition is designed not
                                only to collect feedback, but to generate advocacy-ready data
                                that can support systemic change at institutional, national, and
                                European levels.
                            </p>
                            <div className="flex items-center gap-3 text-sm text-gray-500 italic">
                                <svg
                                    className="w-5 h-5 text-esn-magenta"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a7 7 0 017 7v1H1v-1a7 7 0 017-7z" />
                                </svg>
                                <span>
                                    Target: Participants of Erasmus+, ESC, and ESN events (Autumn
                                    2025 or earlier).
                                </span>
                            </div>
                        </div>
                    </div>

                    <div id="report-2025">
                        <div className="bg-white shadow-lg shadow-esn-dark-blue/10 p-6 sm:p-8 md:p-10 relative overflow-hidden hover:shadow-xl hover:shadow-esn-dark-blue/20 transition-shadow duration-300 paper-fold">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-esn-dark-blue/5 rounded-full blur-3xl -z-10" />

                            <div className="relative z-10">
                                <span className="bg-esn-magenta text-white text-[10px] sm:text-xs font-bold px-3 py-1 mb-4 inline-block rounded-full">
                                    INSIGHTS & REPORTS
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 uppercase text-gray-900">
                                    Evidence-Based Research on{" "}
                                    <span className="text-esn-dark-blue">
                                        Student Visa Barriers
                                    </span>
                                </h2>

                                <div className="space-y-4 mb-6 sm:mb-8">
                                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                                        The previous edition of Barriers of Mobility achieved
                                        significant milestones in understanding visa challenges
                                        faced by the Erasmus Generation.
                                    </p>

                                    <article className="bg-gray-50 rounded-lg p-4 sm:p-5 shadow-sm shadow-gray-200/50">
                                        <h3 className="font-display font-bold text-gray-900 mb-3 text-sm sm:text-base uppercase">
                                            Key Achievements of the Survey
                                        </h3>
                                        <p className="text-gray-600 text-xs sm:text-sm mb-4 italic">
                                            The Barriers of Mobility: Visa Issues for Non-EU Students
                                            survey represents an important step toward understanding
                                            and addressing visa related challenges in international
                                            mobility.
                                        </p>
                                        <ul className="space-y-2.5 text-gray-700 text-sm sm:text-base" role="list">
                                            {[
                                                "Reliable and high-quality data: The survey achieved a 98.6% valid response rate, ensuring strong data reliability and demonstrating that participants clearly understood and engaged with the survey questions.",
                                                "Comprehensive insight into non-EU mobility: With the majority of respondents participating in Erasmus+, alongside ESC, ESN events and other mobility programmes the survey provides a broad and representative overview of non-EU students' mobility and visa experiences.",
                                                "Clear identification of visa barriers: The findings clearly show that visa procedures remain a major structural barrier for non-EU participants. Longterm visa requirements, lengthy processing times and challenging application experiences were commonly reported across programmes.",
                                                "Evidence of information and support gaps: The survey highlights inconsistent information provision and institutional support, particularly during visa and residence permit processes. This demonstrates the need for clearer guidance and stronger institutional responsibility.",
                                                "Increased visibility of visa rejection challenges: Key reasons for visa rejections such as insufficient documentation and financial concerns were identified, alongside a significant lack of transparency in rejection decisions. This underlines the need for fairer and clearer visa procedures.",
                                                "Demonstrating the discouraging effect on mobility: A strong majority of participants agreed that visa related issues discourage non-EU students from applying to mobility programmes, directly affecting accessibility and equal participation in international education.",
                                                "Data-driven foundation for advocacy: The survey provides evidence based insights that can support advocacy efforts, institutional improvements and policy discussions aimed at reducing mobility barriers for non-EU students.",
                                                "Strengthening ESN's role in mobility equity: Through this research, ESN reinforces its role as a key stakeholder and advocate for inclusive mobility, amplifying the voices of non-EU students and contributing to more equitable international exchange opportunities.",
                                            ].map((item, i) => {
                                                const [title, ...descParts] = item.split(": ");
                                                const description = descParts.join(": ");
                                                return (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <svg
                                                            className="w-5 h-5 text-esn-dark-blue shrink-0 mt-0.5"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                        <span>
                                                            <strong>{title}:</strong> {description}
                                                        </span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </article>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                                    <button
                                        onClick={handlePolicyClick}
                                        className="px-6 sm:px-8 py-3.5 sm:py-3 bg-esn-dark-blue text-white font-bold font-display rounded-lg hover:bg-blue-900 active:bg-blue-950 transition shadow-md shadow-esn-dark-blue/25 hover:shadow-lg hover:shadow-esn-dark-blue/35 uppercase flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
                                        aria-label="View the 2025 Barriers of Mobility policy paper"
                                    >
                                        <svg
                                            className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                        <span>View Policy Paper</span>
                                    </button>
                                    <button
                                        onClick={handleSurveyClick}
                                        className="px-6 sm:px-8 py-3.5 sm:py-3 bg-white text-esn-dark-blue font-bold font-display rounded-lg hover:bg-gray-50 active:bg-gray-100 transition shadow-sm shadow-esn-dark-blue/10 hover:shadow-md hover:shadow-esn-dark-blue/20 uppercase flex items-center justify-center gap-2 text-sm sm:text-base border-2 border-esn-dark-blue touch-manipulation"
                                        aria-label="View the 2025 Barriers of Mobility survey report"
                                    >
                                        <span>View Survey Report</span>
                                        <svg
                                            className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <PDFModal
                                    isOpen={isPolicyModalOpen}
                                    onClose={() => setIsPolicyModalOpen(false)}
                                    title="Barriers of Mobility: Policy Paper 2025"
                                    pdfPath="/documents/policy-paper-2025.pdf"
                                />
                                <PDFModal
                                    isOpen={isSurveyModalOpen}
                                    onClose={() => setIsSurveyModalOpen(false)}
                                    title="Barriers of Mobility: Survey Report 2024"
                                    pdfPath="/documents/survey-report-2024.pdf"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectInfo;
