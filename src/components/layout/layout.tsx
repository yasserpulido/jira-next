import Head from "next/head";

import styled from "@emotion/styled";
import { Footerbar, Navbar, maxWidth, mediaQuery } from "@/design-system";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Jira Next</title>
        <meta name="author" content="Yasser Barzotto" />
        <meta name="description" content="Jira lite based on Next.js" />
        <meta name="keywords" content="Jira, Next.js, React, TypeScript" />
      </Head>
      <Container>
        <Navbar title={{ name: "Jira Next", color: "BlueDress", link: "/" }} />
        <Main>{children}</Main>
        <Footerbar text="Developed by Yasser Barzotto" />
      </Container>
    </>
  );
};

const Container = styled.div({
  [mediaQuery.large]: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: maxWidth.medium,
  },
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

const Main = styled.main({
  display: "flex",
  flexDirection: "column",
  flex: 1,
});
