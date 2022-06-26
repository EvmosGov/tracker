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
    <div className="grid grid-cols-5 mx-auto">
          <div className="col-span-1 pr-8 row-span-3">
          <article className="p-4 bg-neutral border border-gray-700 rounded-sm">
            <div className="flex items-center">
          

              <div className="ml-1">
                <h5 className="text-lg font-medium text-white">Evmos Proposal Lifecycle</h5>
                <hr className="my-4" />
                <p className="text-xs">Learn how a community proposal goes from idea to execution.</p>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://github.com/andrewmcodes/hyperui"
                  target="_blank"
                  className="block h-full p-4 border border-gray-700 rounded-lg hover:border-secondary" rel="noreferrer"
                >
                  <h5 className="font-medium text-white">1. Signaling 🚦</h5>

                  <p className="mt-1 text-xs font-medium text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </a>
              </li> 
              <li>
                <a
                  href="https://github.com/andrewmcodes/hyperui"
                  target="_blank"
                  className="block h-full p-4 border border-gray-700 rounded-lg hover:border-secondary" rel="noreferrer"
                >
                  <h5 className="font-medium text-white">2. Proposal Draft 💡</h5>

                  <p className="mt-1 text-xs font-medium text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </a>
              </li>
<li>
                <a
                  href="https://github.com/andrewmcodes/hyperui"
                  target="_blank"
                  className="block h-full p-4 border border-gray-700 rounded-lg hover:border-secondary" rel="noreferrer"
                >
                  <h5 className="font-medium text-white">3. Final & RFC 📝</h5>

                  <p className="mt-1 text-xs font-medium text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/andrewmcodes/hyperui"
                  target="_blank"
                  className="block h-full p-4 border border-gray-700 rounded-lg hover:border-secondary" rel="noreferrer"
                >
                  <h5 className="font-medium text-white">4. Onchain Voting 🌌</h5>

                  <p className="mt-1 text-xs font-medium text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </a>
              </li>

            </ul>
          </article>
          <a className="mt-4 block p-6 bg-neutral border border-gray-700 shadow-xl rounded-sm group hover:shadow-lg" href="">
 

  <h3 className="text-lg font-medium text-white group-hover:text-gray-400">Have an awesome idea or project?</h3>

  <div className="inline-flex items-center mt-4 text-gray-300">
    <p className="text-sm font-medium">Proposal Documentation</p>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 ml-1 transition-transform transform group-hover:translate-x-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </div>
</a>
                  </div>
      <div className="col-span-5 col-start-2">
        <IssueDetailsHeading issue={issue} />
      </div>
      

      <div className="col-span-3 col-start-2 row-start-auto">
        
        <div className="prose lg:prose-lg dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {issue.body}
          </ReactMarkdown>
        </div>
      </div>
      <IssueDetailsSidebar issue={issue} />
    </div>
  );
}
