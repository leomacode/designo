import { render, screen } from "@testing-library/react";
import App from "../App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const RenderApp = ({ history }) => {
  return (
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );
};

it("full app rendering", () => {
  const history = createMemoryHistory();
  render(<RenderApp history={history} />);

  //display home page
  expect(
    screen.getByText(
      /Award-winning custom designs and digital branding solutions/i
    )
  ).toBeInTheDocument();

  //display 2 logo pics in header and footer
  expect(screen.getAllByAltText(/logo/i).length).toBe(2);
});

it("Landing a bad page", () => {
  const history = createMemoryHistory();
  history.push("/some/bad/route");
  render(<RenderApp history={history} />);
  const h1Element = screen.getByText(/404/i);
  expect(h1Element).toBeInTheDocument();
});

it("Land about page", () => {
  const history = createMemoryHistory();
  history.push("/about");
  render(<RenderApp history={history} />);
  const element = screen.getByText(/about us/i);
  expect(element).toBeInTheDocument();
});

it("Land locations page", () => {
  const history = createMemoryHistory();
  history.push("/locations");
  render(<RenderApp history={history} />);
  const element = screen.getByText(/canada/i);
  expect(element).toBeInTheDocument();
});

it("Land contact page", () => {
  const history = createMemoryHistory();
  history.push("/contact");
  render(<RenderApp history={history} />);
  const element = screen.getByTestId("contact-us");
  expect(element).toBeInTheDocument();
});
