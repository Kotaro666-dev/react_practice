import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greeting";

describe("Greeting components", () => {
  test("Renders hello wolrd as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const element = screen.getByText("Hello World", { exact: false });
    expect(element).toBeInTheDocument();
  });

  test("Renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);

    const element = screen.getByText(`good to see you`, { exact: false });
    expect(element).toBeInTheDocument();
  });

  test("Renders Changed here if the button was clicked", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const element = screen.getByText(`Changed here`, { exact: false });
    expect(element).toBeInTheDocument();
  });

  test("Do not render good to see you if the button was clicked", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const element = screen.queryByText(`good to see you`, { exact: false });
    expect(element).toBeNull();
  });
});
