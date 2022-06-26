import type { Metadata } from "./types";

export const metadataCommentRegex = /[//]: # (.*)/;

export function getMetadataAndCleanedComment(comment: string): {
  metadata: Metadata;
  cleanedComment: string;
} {
  const match = comment.match(metadataCommentRegex);

  const metadata = match ? JSON.parse(match[1]) : { address: [] };
  const cleanedComment = comment.replace(metadataCommentRegex, "");
  return { cleanedComment, metadata };
}

export function setMetadataComment(
  metadataInfoText: string,
  metadata: Metadata
) {
  return `${metadataInfoText}\n\n<!-- better-meta = ${JSON.stringify(
    metadata
  )} -->`;
}

export function buildMetadataInfoText(metadata: Metadata) {
  let infoComment = `This issue has ${metadata.bounties.length} bounties.\n`;
  for (const bounty of metadata.bounties) {
    infoComment += `Chain: ${bounty.chain}, Bounty ID: ${bounty.bountyId}\n`;
  }
  return infoComment;
}
