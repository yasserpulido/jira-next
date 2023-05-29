import { colors } from "@/design-system";
import { JiraProvider } from "@/providers";
import { Entry } from "@/types";
import styled from "@emotion/styled";
import { useContext } from "react";

type Props = {
  entry: Entry;
};

export const JiraCard = ({ entry }: Props) => {
  const context = useContext<JiraProvider.ContextType>(JiraProvider.Context);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", entry.id);
    context.handleDrag(true);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    context.handleDrag(false);
  };

  return (
    <Card draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <CardContent>{entry.description}</CardContent>
      <CardFooter>{entry.createdAt}</CardFooter>
    </Card>
  );
};

const Card = styled.div({
  border: `1px solid ${colors.Black}`,
  padding: "1rem",
  margin: "1rem",
});

const CardContent = styled.div({
  marginBottom: "0.5rem",
  fontSize: "0.75rem",
});

const CardFooter = styled.small({
  display: "block",
  textAlign: "right",
  fontSize: "0.65rem",
});
