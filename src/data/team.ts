export type TeamMember = {
    name: string;
    role: string;
    image?: string;
};

export const previousEditionTeam: TeamMember[] = [
    { name: "Gökay", role: "Previous edition" },
    { name: "Merve", role: "Previous edition" },
    { name: "Hazal", role: "Previous edition" },
    { name: "Berker", role: "Previous edition" },
];

export const currentTeam: TeamMember[] = [
    {
        name: "Sedanur Demiral",
        role: "NDC Main Chair",
        image: "https://esnturkiye.github.io/esn-assets/images/team/sedanur.jpeg",
    },
    {
        name: "Ömer Çavuşoğlu",
        role: "NDC Survey Team Vice Chair",
        image: "https://esnturkiye.github.io/esn-assets/images/team/omer.jpeg",
    },
    {
        name: "Efe Berke Akkaya",
        role: "ESN Türkiye President",
        image: "https://esnturkiye.github.io/esn-assets/images/team/efe-berke.jpeg",
    },
];

export const prTeam: TeamMember[] = [
    { name: "Merve Ceylan", role: "PR team" },
    {
        name: "Neva Karakoyun",
        role: "PR team",
        image: "https://esnturkiye.github.io/esn-assets/images/team/IMG_5641.jpeg",
    },
];

export const webTeam: TeamMember[] = [
    {
        name: "Ali Görkem Sali",
        role: "WPA",
        image: "https://esnturkiye.github.io/esn-assets/images/team/IMG_5640.jpg",
    },
    {
        name: "Hakkı Erdem Günal",
        role: "Project Team Leader",
        image: "https://esnturkiye.github.io/esn-assets/images/team/IMG_5642.jpg",
    },
];
