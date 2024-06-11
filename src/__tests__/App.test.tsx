import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the initial count", () => {
  render(<App />);
  expect(screen.getByText(/count is 0/)).toBeInTheDocument();
});
