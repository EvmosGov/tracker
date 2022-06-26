import type { IssueType } from "./types";

export const issueTypes: Record<"SIGNALING" | "DRAFT" | "REVIEW" | "ONCHAIN", IssueType> =
  {
    SIGNALING: "signaling",
    DRAFT: "draft",
    REVIEW: "review",
    ONCHAIN: "onchain",
  };
