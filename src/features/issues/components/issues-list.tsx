import React, { useEffect } from "react";

import { IssuesListItem } from "./issues-list-item";
import { useIssuesQuery } from "../hooks/useIssuesQueries";

import type { IssueType } from "../types";

export function IssuesList(props: { title: string; issueType: IssueType, colColor: string, icon: string }) {
  const [currentPage, setCurrentPage] = React.useState(1);

  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useIssuesQuery(props.issueType, currentPage);



  return (
      
      <>
      <div>
      <div className={`flex flex-row  border-gray-100 dark:border-zinc-800 w-full`}>
      <div className={`pt-3 px-6 mb-0 bg-gray-200 rounded-sm rounded-b-none border-t-[8px] shadow w-full ${props.colColor}`}>
        <div className="flex justify-between space-x-1 items-center pb-3">
          <h3 className="font-semibold" data-config-id="header1">{props.title}</h3>
          <span className="flex justify-center items-center w-6 h-6 text-xl"><i className={`${props.icon}`}></i></span>
        </div>
      </div>
    </div>
    <ul>

        {isLoading ? (
          <div className="text-center p-4">Loading...</div>
        ) : isError ? (
          <div className="text-center p-4">Error: {error}</div>
        ) : data.length === 0 ? (
          <div className="text-center p-4">No issues</div>
        ) : (
          data.map((issue) => (
            <IssuesListItem key={issue.number} issue={issue} />
          ))
        )}
      </ul>
      </div>
      </>
  );
}
