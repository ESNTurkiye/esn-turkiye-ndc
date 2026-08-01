import { useState, useCallback } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";
import { isMobileDevice } from "@/utils/device";
import { openPDF } from "@/utils/pdf";
import { DOCUMENT_CONFIG } from "./projectInfoData";

export function useProjectInfoDocuments() {
    const { trackDocumentAction, trackButtonClick } = useAnalytics();
    const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);

    const handlePolicyClick = useCallback(() => {
        trackDocumentAction("view", DOCUMENT_CONFIG.policyPaper.analyticsId);
        trackButtonClick("view_policy_paper", "project_info_section");

        if (isMobileDevice()) {
            openPDF(DOCUMENT_CONFIG.policyPaper.path);
        } else {
            setIsPolicyModalOpen(true);
        }
    }, [trackDocumentAction, trackButtonClick]);

    const handleReport2024Click = useCallback(() => {
        trackDocumentAction("view", DOCUMENT_CONFIG.report2024.analyticsId);
        trackButtonClick("view_report_2024", "project_info_section");

        window.open(DOCUMENT_CONFIG.report2024.path, "_blank", "noopener,noreferrer");
    }, [trackDocumentAction, trackButtonClick]);

    const handleSurveyClick = useCallback(() => {
        trackDocumentAction("view", DOCUMENT_CONFIG.surveyReport.analyticsId);
        trackButtonClick("view_survey_report", "project_info_section");

        window.open(DOCUMENT_CONFIG.surveyReport.path, "_blank", "noopener,noreferrer");
    }, [trackDocumentAction, trackButtonClick]);

    return {
        isPolicyModalOpen,
        setIsPolicyModalOpen,
        handlePolicyClick,
        handleReport2024Click,
        handleSurveyClick,
    };
}