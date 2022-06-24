import { Layout } from "features/common/components/layout";
import { IssuesList } from "./issues-list";
import { issueTypes } from "../constants";

import type { NextPage } from "next";

const IssuesListPage: NextPage = () => {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-4 space-x-2">
        <IssuesList issueType={issueTypes.OPEN} title="Signaling Stage" />
        <IssuesList issueType={issueTypes.REVIEW} title="Proposal Submitted" />
        <IssuesList issueType={issueTypes.IN_PROGRESS} title="Mandatory Review" />
        <IssuesList issueType={issueTypes.LIVE} title="Onchain Voting" />
      </div>
    </Layout>
  );
};

export default IssuesListPage;
