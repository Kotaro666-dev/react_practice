import { render, screen } from "@testing-library/react";

import Greeting from "./Greeting";

test("Renders hello wolrd as a text", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // ... nothing

  // Assert
  const element = screen.getByText("Hello World", { exact: false });
  expect(element).toBeInTheDocument();
});
