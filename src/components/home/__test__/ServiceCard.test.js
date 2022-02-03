import { render, screen } from "@testing-library/react";
import ServiceCard from "../ServiceCard";
import { BrowserRouter } from "react-router-dom";
import {
  appDesignDesktop,
  appDesignTablet,
  appDesignMobile,
} from "../../../assets/home";
import "@testing-library/jest-dom";

const MockServiceCard = ({ title, img, imgM, imgL }) => {
  return (
    <BrowserRouter>
      <ServiceCard title={title} img={img} imgM={imgM} imgL={imgL} />
    </BrowserRouter>
  );
};

it("service card should have a dynamic class name according to title", () => {
  render(
    <MockServiceCard
      title="app design"
      img={appDesignMobile}
      imgM={appDesignTablet}
      imgL={appDesignDesktop}
    />
  );
  const wrapperElement = screen.getByTestId("service-card-wrapper");
  expect(wrapperElement).toHaveClass("app");
});

it("service card should have a background image", () => {
  render(
    <MockServiceCard
      title="app design"
      img={appDesignMobile}
      imgM={appDesignTablet}
      imgL={appDesignDesktop}
    />
  );

  const wrapperElement = screen.getByTestId("service-card-wrapper");
  expect(wrapperElement).toHaveStyle(
    `background-image:url(image-app-design.jpg)`
  );
});

it("service card background should have a dynamic class name according to title", () => {
  render(
    <MockServiceCard
      title="app design"
      img={appDesignMobile}
      imgM={appDesignTablet}
      imgL={appDesignDesktop}
    />
  );
  const wrapperElement = screen.getByTestId("service-card-bg");
  expect(wrapperElement).toHaveClass("app-bg");
});

it("service card title should be rendered", () => {
  render(
    <MockServiceCard
      title="app design"
      img={appDesignMobile}
      imgM={appDesignTablet}
      imgL={appDesignDesktop}
    />
  );
  const wrapperElement = screen.getByText(/app design/i);
  expect(wrapperElement).toBeInTheDocument();
});
