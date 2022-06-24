import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import IssueDetailsHeading from "./issue-details-heading";
import IssueDetailsSidebar from "./issue-details-sidebar";

import { useIssueDetailsQuery } from "../hooks/useIssuesQueries";

export function IssueDetails(props: { issueNumber: number }) {
  const {
    data: issue,
    isLoading,
    isFetching,
  } = useIssueDetailsQuery(props.issueNumber);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!issue) {
    return <div>Not found</div>;
  }

  return (
    <div className="sm:max-w-4xl md:max-w-none grid grid-cols-5 space-x-3 mx-auto  ">
      <div className="col-span-5">
        <IssueDetailsHeading issue={issue} />
      </div>
      <div className="col-span-1 !-ml-2">
        <div className="h-96 bg-gray-200"></div>
      </div>
      <div className="col-span-3">
        <div className="prose dark:prose-invert px-8">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {issue.body}
          </ReactMarkdown>
        </div>
      </div>
      <IssueDetailsSidebar issue={issue} />
    </div>
  );
}
