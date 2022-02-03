import { render, screen } from "@testing-library/react";
import FeatureCard from "../FeatureCard";
import { passionate } from "../../../assets/home";
import "@testing-library/jest-dom/extend-expect";

it("should render feature card img", () => {
  render(
    <FeatureCard title="passionate" imgUrl={passionate} text="test text" />
  );
  const imgElement = screen.getByRole("img");
  expect(imgElement).toBeInTheDocument();
});

it("should render feature card title", () => {
  render(
    <FeatureCard title="passionate" imgUrl={passionate} text="test text" />
  );
  const h3Element = screen.getByRole("heading", { value: "passionate" });
  expect(h3Element).toBeInTheDocument();
});

it("should render feature card text", () => {
  render(
    <FeatureCard title="passionate" imgUrl={passionate} text="test text" />
  );
  const h3Element = screen.getByText(/test text/i);
  expect(h3Element).toBeInTheDocument();
});
