import { useContext } from "react";
import { Jira } from "..";
import { JiraProvider } from "@/providers";
import styled from "@emotion/styled";

type Props = {
  status: "pending" | "progress" | "complete";
};

export const JiraList = ({ status }: Props) => {
  const context = useContext<JiraProvider.ContextType>(JiraProvider.Context);

  const filteredEntries = context.entries.filter(
    (entry) => entry.status === status
  );

  const handleDrop = (e: React.DragEvent<HTMLUListElement>) => {
    const entryId = e.dataTransfer.getData("text");
    console.log(entryId);
    // context.updateEntry(entryId, { status });
  };

  const handleDragOver = (e: React.DragEvent<HTMLUListElement>) => {
    e.preventDefault();
  };

  return (
    <List onDrop={handleDrop} onDragOver={handleDragOver}>
      {filteredEntries.map((entry) => (
        <li key={entry.id}>
          <Jira.JiraCard entry={entry} />
        </li>
      ))}
    </List>
  );
};

const List = styled.ul({
  height: "100%",
});
