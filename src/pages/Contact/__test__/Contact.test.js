import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const MockContact = ({ validate }) => {
  return (
    <BrowserRouter>
      <Contact validateValue={validate} />
    </BrowserRouter>
  );
};

it("Contact us title is displayed on the page", () => {
  render(<MockContact />);
  const h1Element = screen.getByTestId("contact-us");
  expect(h1Element).toBeInTheDocument();
});

describe("test the form input fields", () => {
  const changeInput = (inputLabel, inputValue) => {
    render(<MockContact />);
    const element = screen.getByLabelText(`${inputLabel}`);
    userEvent.type(element, `${inputValue}`);
    expect(element).toHaveValue(`${inputValue}`);
  };

  it("Name input is working", () => {
    changeInput("name", "test name");
  });

  it("Email input is working", () => {
    changeInput("email", "test@test.com");
  });

  it("Phone input is working", () => {
    changeInput("phone", "1234567");
  });

  it("message input is working", () => {
    changeInput("message", "test test");
  });
});

it("Submit button is displayed on the page", () => {
  render(<MockContact />);
  const btnElement = screen.getByRole("button");
  expect(btnElement).toBeInTheDocument();
});

test("rendering and submitting a form", async () => {
  const validate = jest.fn();
  render(<MockContact validate={validate} />);
  userEvent.click(screen.getByRole("button"));
  expect(validate).toHaveBeenCalled();
});
