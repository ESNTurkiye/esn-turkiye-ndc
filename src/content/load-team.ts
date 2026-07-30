import { teamMemberSchema, type TeamMember } from "./schemas/team-member";
import { z } from "zod";
import rawTeam from "../../content/team.json";

type TeamData = {
  previousEditionTeam: TeamMember[];
  currentTeam: TeamMember[];
  prTeam: TeamMember[];
  webTeam: TeamMember[];
};

function parseGroup(group: unknown): TeamMember[] {
  return z.array(teamMemberSchema).parse(group);
}

export function loadTeam(): TeamData {
  const data = rawTeam as Record<string, unknown>;
  return {
    previousEditionTeam: parseGroup(data.previousEditionTeam),
    currentTeam: parseGroup(data.currentTeam),
    prTeam: parseGroup(data.prTeam),
    webTeam: parseGroup(data.webTeam),
  };
}