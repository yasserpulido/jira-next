import styled from "@emotion/styled";

import { Entry, Layout } from "@/components";
import { Heading, colors } from "@/design-system";
import { Jira } from "@/components";
import { useContext } from "react";
import { JiraProvider } from "@/providers";

export default function Home() {
  const context = useContext<JiraProvider.ContextType>(JiraProvider.Context);

  return (
    <Layout>
      <Entry />
      <Container>
        <JiraColumn isDraggable={context.isDragging}>
          <Heading size="h6">Pending</Heading>
          <Jira.JiraList status="pending" />
        </JiraColumn>
        <JiraColumn isDraggable={context.isDragging}>
          <Heading size="h6">Progress</Heading>
          <Jira.JiraList status="progress" />
        </JiraColumn>
        <JiraColumn isDraggable={context.isDragging}>
          <Heading size="h6">Complete</Heading>
          <Jira.JiraList status="complete" />
        </JiraColumn>
      </Container>
    </Layout>
  );
}

const Container = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1rem",
  marginTop: "1rem",
  flex: 1,
});

type JiraColumnProps = {
  isDraggable?: boolean;
};

const JiraColumn = styled.div<JiraColumnProps>(({ isDraggable }) => ({
  border: `1px ${isDraggable ? "dashed" : "solid"} ${colors.Black}`,

  "& h6": {
    padding: "1rem",
    textAlign: "center",
  },
}));
