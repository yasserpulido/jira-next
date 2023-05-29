export type Entry = {
  id: string;
  status: "pending" | "progress" | "complete";
  description: string;
  createdAt: string;
};
