import { useState, useCallback } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";
import { isMobileDevice } from "@/utils/device";
import { openPDF } from "@/utils/pdf";
import { DOCUMENT_CONFIG } from "./projectInfoData";

export function useProjectInfoDocuments() {
    const { trackDocumentAction, trackButtonClick } = useAnalytics();
    const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
    const [isSurveyModalOpen, setIsSurveyModalOpen] = useState(false);

    const handlePolicyClick = useCallback(() => {
        trackDocumentAction("view", DOCUMENT_CONFIG.policyPaper.analyticsId);
        trackButtonClick("view_policy_paper", "project_info_section");

        if (isMobileDevice()) {
            openPDF(DOCUMENT_CONFIG.policyPaper.path);
        } else {
            setIsPolicyModalOpen(true);
        }
    }, [trackDocumentAction, trackButtonClick]);

    const handleSurveyClick = useCallback(() => {
        trackDocumentAction("view", DOCUMENT_CONFIG.surveyReport.analyticsId);
        trackButtonClick("view_survey_report", "project_info_section");

        if (isMobileDevice()) {
            openPDF(DOCUMENT_CONFIG.surveyReport.path);
        } else {
            setIsSurveyModalOpen(true);
        }
    }, [trackDocumentAction, trackButtonClick]);

    return {
        isPolicyModalOpen,
        setIsPolicyModalOpen,
        isSurveyModalOpen,
        setIsSurveyModalOpen,
        handlePolicyClick,
        handleSurveyClick,
    };
}