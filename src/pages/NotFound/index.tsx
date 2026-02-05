import { Container } from "../../components/Container";
import { MainTemplate } from "../../templates/Main";

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>404 - Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </Container>
    </MainTemplate>
  );
}