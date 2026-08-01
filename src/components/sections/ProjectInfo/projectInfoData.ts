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
    "Comprehensive understanding of mobility barriers: The survey provides a broad overview of the visa experiences of non-EU students across international mobility programmes, identifying the most significant obstacles affecting participation.",
    "Evidence of systemic challenges: The findings highlight lengthy procedures, complex application processes, inconsistent institutional support, and limited transparency as persistent barriers to international mobility.",
    "Demonstrating the impact on participation: Visa-related challenges continue to discourage non-EU students from participating in mobility programmes, limiting equal access to international education.",
    "Supporting policy and advocacy: The results provide a strong evidence base for institutional improvements, policy discussions, and ESN's advocacy efforts to promote fairer, more accessible, and more inclusive mobility opportunities.",
] as const;

export const TARGET_AUDIENCE =
    "Target: Participants of Erasmus+, ESC, and ESN events (Autumn 2025 or earlier).";

