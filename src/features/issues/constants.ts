import type { IssueType } from "./types";

export const issueTypes: Record<"OPEN" | "IN_PROGRESS" | "LIVE", IssueType> =
  {
    OPEN: "open",
    IN_PROGRESS: "inProgress",
    REVIEW: "review",
    LIVE: "live",
  };
