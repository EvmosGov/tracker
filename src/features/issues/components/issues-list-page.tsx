import { Layout } from "features/common/components/layout";
import { IssuesList } from "./issues-list";
import { issueTypes } from "../constants";

import type { NextPage } from "next";

const IssuesListPage: NextPage = () => {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-4 space-x-4 text-gray-800">
        <IssuesList issueType={issueTypes.SIGNALING} colColor="border-blue-300" title="Known Issue or Task"  icon="fa-solid fa-circle-exclamation"/>
        <IssuesList issueType={issueTypes.DRAFT} colColor="border-yellow-300" title="In Progress"  icon="fa-solid fa-building-columns"/>
        <IssuesList issueType={issueTypes.REVIEW} colColor="border-orange-300" title="Proposed to Community"  icon="fa-solid fa-bullhorn"/>
        <IssuesList issueType={issueTypes.ONCHAIN} colColor="border-green-300" title="Onchain Voting" icon="fa-solid fa-check-to-slot" />
      </div>
    </Layout>
  );
};

export default IssuesListPage;
