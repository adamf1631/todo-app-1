import { Container } from "semantic-ui-react";
import "./App.css";
import Head from "./components/Head";
import Todos from "./components/Todos";

function App() {
  return (
    <Container style={{ paddingBottom: 40 }}>
      <Head />
      <Todos />
    </Container>
  );
}

export default App;
