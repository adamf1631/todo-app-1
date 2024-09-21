import { Grid, Header, Icon } from "semantic-ui-react";

export default function Todo({ todo }) {
  return (
    <>
      <Grid.Row style={{ border: "thin solid #f5f5f5" }}>
        <Grid.Column>{todo.title}</Grid.Column>
        <Grid.Column>
          {todo.completed ? (
            <>
              <Header as="h6">
                <Icon color="blue" name="checkmark box" />
                <Header.Content>Completed</Header.Content>
              </Header>
            </>
          ) : (
            <>
              <Header as="h6">
                <Icon name="square outline" />
                <Header.Content>Not Completed</Header.Content>
              </Header>
            </>
          )}
        </Grid.Column>
      </Grid.Row>
    </>
  );
}
