import React from "react";
import { Container, Header, Icon } from "semantic-ui-react";

export default function Head() {
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 40,
      }}
      className="header"
    >
      <Header as="h2">
        <Icon size="small" color="blue" name="checkmark box" />
        <Header.Content>
          Todo App
          <Header.Subheader>Turn a To-do into a Ta-da!</Header.Subheader>
        </Header.Content>
      </Header>
    </Container>
  );
}
