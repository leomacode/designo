import { render, screen } from "@testing-library/react";
import App from "../../../App/App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

function loadServicePage() {
  const history = createMemoryHistory();
  const route = "/services/app-design";
  history.push(route);
  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );
}

function testById(id) {
  loadServicePage();
  const Element = screen.getByTestId(id);
  expect(Element).toBeInTheDocument();
}

it("service title is displayed on the page", () => {
  loadServicePage();
  const titleElement = screen.getByText(/app design/i);
  expect(titleElement).toBeInTheDocument();
});

it("service description is displayed on the page", () => {
  loadServicePage();
  const pElement = screen.getByTestId("test-body");
  expect(pElement).toBeInTheDocument();
});

it("project cards are displayed on the page", () => {
  testById("project-cards");
});

it("project cards are displayed on the page", () => {
  testById("project-cards");
});

it("CAT section is displayed on the page", () => {
  testById("service-cat");
});
