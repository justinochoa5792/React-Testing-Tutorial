import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("counter displays correct initial count", () => {
    render(<Counter initalCount={0} />);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
  it("count should increment by 1 if the increment btn is clicked", () => {
    render(<Counter initalCount={0} />);
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    fireEvent.click(incrementBtn);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(1);
  });
  it("count should decrement by 1 if the increment btn is clicked", () => {
    render(<Counter initalCount={0} />);
    const decrement = screen.getByRole("button", { name: "Decrement" });
    fireEvent.click(decrement);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(-1);
  });
  it("count should set the count to 0 if the reset btn is clicked", () => {
    render(<Counter initalCount={50} />);
    const restart = screen.getByRole("button", { name: "Restart" });
    fireEvent.click(restart);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
  it("should change the sign if the switch sign btn is clicked", () => {
    render(<Counter initalCount={50} />);
    const signSwitch = screen.getByRole("button", { name: "Switch Sign" });
    fireEvent.click(signSwitch);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(-50);
  });
});
