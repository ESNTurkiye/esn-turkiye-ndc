import { REPORT_URL } from "@/config";

export const PROJECT_INTRODUCTION = {
    badge: "Project Overview",
    title:
        "What is the Barrier of Mobility Visa Issues for Non EU-2026 Edition Survey?",
    description:
        "The Barriers of Mobility Survey gathers the experiences of non-EU students participating in international mobility programmes to understand how visa and residence permit procedures affect their journey. The findings reveal key challenges, highlight structural barriers, and provide evidence to support more accessible, fair, and inclusive mobility opportunities for everyone.",
    whyItMattersTitle: "Why It Matters",
    whyItMattersDescription:
        "Every response contributes to a bigger picture. By turning students' experiences into evidence, the survey supports advocacy, informs decision-makers, and drives improvements that make international mobility more accessible and inclusive.",
} as const;

export const DOCUMENT_CONFIG = {
    policyPaper: {
        path: "/documents/policy-paper-2025.pdf",
        modalTitle: "Barriers of Mobility: Policy Paper 2025",
        analyticsId: "policy-paper-2025.pdf",
        buttonLabel: "View Policy Paper",
    },
    surveyReport: {
        path: REPORT_URL,
        modalTitle: "Barriers of Mobility: Survey Report 2026",
        analyticsId: "survey-report-2026",
        buttonLabel: "View Survey Report",
        isExternal: true,
    },
} as const;

export const KEY_ACHIEVEMENTS = [
    "Reliable and high-quality data: The survey achieved a 98.6% valid response rate, ensuring strong data reliability and demonstrating that participants clearly understood and engaged with the survey questions.",
    "Comprehensive insight into non-EU mobility: With the majority of respondents participating in Erasmus+, alongside ESC, ESN events and other mobility programmes the survey provides a broad and representative overview of non-EU students' mobility and visa experiences.",
    "Clear identification of visa barriers: The findings clearly show that visa procedures remain a major structural barrier for non-EU participants. Longterm visa requirements, lengthy processing times and challenging application experiences were commonly reported across programmes.",
    "Evidence of information and support gaps: The survey highlights inconsistent information provision and institutional support, particularly during visa and residence permit processes. This demonstrates the need for clearer guidance and stronger institutional responsibility.",
    "Increased visibility of visa rejection challenges: Key reasons for visa rejections such as insufficient documentation and financial concerns were identified, alongside a significant lack of transparency in rejection decisions. This underlines the need for fairer and clearer visa procedures.",
    "Demonstrating the discouraging effect on mobility: A strong majority of participants agreed that visa related issues discourage non-EU students from applying to mobility programmes, directly affecting accessibility and equal participation in international education.",
    "Data-driven foundation for advocacy: The survey provides evidence based insights that can support advocacy efforts, institutional improvements and policy discussions aimed at reducing mobility barriers for non-EU students.",
    "Strengthening ESN's role in mobility equity: Through this research, ESN reinforces its role as a key stakeholder and advocate for inclusive mobility, amplifying the voices of non-EU students and contributing to more equitable international exchange opportunities.",
] as const;

export const TARGET_AUDIENCE =
    "Target: Participants of Erasmus+, ESC, and ESN events (Autumn 2025 or earlier).";
