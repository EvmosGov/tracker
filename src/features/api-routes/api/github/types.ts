export type Metadata = {
  bounties: {
    chain: string;
    bountyId: number;
  }[];
  address: string
};

export type CommentMatadata = {
  votes?: number;
  upVotes: number;
  downVotes: number;
  voters: string[];
};
