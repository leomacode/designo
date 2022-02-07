import { render, screen } from "@testing-library/react";
import ProjectCard from "../ProjectCard";
import { airfilter } from "../../../assets";

it("ProjectCard card img is displayed on the page", () => {
  render(<ProjectCard projectImg={airfilter} />);
  const imgElement = screen.getByAltText("projct-overview");
  expect(imgElement).toBeInTheDocument();
});

it("ProjectCard card title is displayed on the page", () => {
  render(<ProjectCard title="test" />);
  const h3Element = screen.getByRole("heading", { value: "test" });
  expect(h3Element).toBeInTheDocument();
});

it("ProjectCard card description is displayed on the page", () => {
  render(<ProjectCard description="test" />);
  const pElement = screen.getByText(/test/i);
  expect(pElement).toBeInTheDocument();
});
