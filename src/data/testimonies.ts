export type Testimony = {
    id: number;
    name: string;
    country: string;
    title: string;
    preview: string;
    category: string;
};

export const testimonies: Testimony[] = [
    {
        id: 1,
        name: "Erasmus Student",
        country: "Germany Destination",
        title: "Appointment delays cost me my semester",
        preview:
            "I applied for my visa 3 months in advance, but due to the lack of appointment slots at iDATA, I missed the start of the academic year...",
        category: "Appointment Issue",
    },
    {
        id: 2,
        name: "Anonymous",
        country: "Italy Destination",
        title: "Rejected without a clear reason",
        preview:
            "Despite having all my documents, financial proof and acceptance letter ready, I received a rejection letter stating article 13...",
        category: "Rejection",
    },
    {
        id: 3,
        name: "PhD Candidate",
        country: "Czechia Destination",
        title: "Waiting for 6 months",
        preview:
            "The uncertainty is the hardest part. My research project is on hold because the consulate has been processing my application for over...",
        category: "Processing Time",
    },
];
