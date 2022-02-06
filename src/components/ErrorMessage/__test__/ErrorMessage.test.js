import { render, screen } from "@testing-library/react";
import ErrorMessage from "../ErrorMessage";

it("error message is displayed on the page", () => {
  render(<ErrorMessage msg="test-message" />);
  const pElement = screen.getByText(/test-message/i);
  expect(pElement).toBeInTheDocument();
});

it("error image is displayed on the page", () => {
  render(<ErrorMessage msg="test-message" />);
  const imgElement = screen.getByAltText("error");
  expect(imgElement).toBeInTheDocument();
});
