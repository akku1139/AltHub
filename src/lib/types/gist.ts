import type { User } from "./user.ts";

export type Gist = {
  title: string;
  description: string;
  user: User;
  gistID: string;
  //stars: number;
  stars: string;
  // stargazers: User[];
  //forks: number;
  forks: string;
  files: {
    filename: string;
    content:  {
      text?: string; // if basic file
      url?: string; // if image like file
    };
  };
  //revisions: {

  //};
  comments: {
    user: User;
    date: Date;
    contentHistory: string[];
  };
};
