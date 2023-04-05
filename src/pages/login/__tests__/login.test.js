import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "../Login";

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "John" },
    }),
  },
}));
// playholder
test("should render", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});

test("password should be rendered", () => {
  render(<Login />);
  const passwordEl = screen.getByPlaceholderText(/password/i);
  expect(passwordEl).toBeInTheDocument();
});
// test("button should be rendered", () => {
//   render(<Login />);
//   const btn = screen.getByRole("button");
//   expect(btn).toBeInTheDocument();
// });

// // check empty
// test("username input should be empty", () => {
//   render(<Login />);
//   const usernameEl = screen.getByPlaceholderText(/username/i);
//   expect(usernameEl.value).toBe("");
// });
// test("password input should be empty", () => {
//   render(<Login />);
//   const passwordEl = screen.getByPlaceholderText(/password/i);
//   expect(passwordEl.value).toBe("");
// });

// test("button should be disable", () => {
//   render(<Login />);
//   const btn = screen.getByRole("button");
//   expect(btn).toBeDisabled();
// });

// test("error should not be visible", () => {
//   render(<Login />);
//   const errorEl = screen.getByTestId("error");
//   expect(errorEl).not.toBeVisible();
// });

// // change
// test("username input should be change", () => {
//   render(<Login />);
//   const usernameEl = screen.getByPlaceholderText(/username/i);
//   const testValue = "tesst";
//   fireEvent.change(usernameEl, { target: { value: testValue } });
//   expect(usernameEl.value).toBe(testValue);
// });
// test("password input should be change", () => {
//   render(<Login />);
//   const passwordEl = screen.getByPlaceholderText(/password/i);
//   const testValue = "tesst";
//   fireEvent.change(passwordEl, { target: { value: testValue } });
//   expect(passwordEl.value).toBe(testValue);
// });

// test("button should not be disable when get an input", () => {
//   render(<Login />);
//   const btn = screen.getByRole("button");
//   const usernameEl = screen.getByPlaceholderText(/username/i);
//   const passwordEl = screen.getByPlaceholderText(/password/i);

//   const testValue = "tesst";
//   fireEvent.change(passwordEl, { target: { value: testValue } });

//   fireEvent.change(usernameEl, { target: { value: testValue } });
//   expect(btn).not.toBeDisabled();
// });

// test("loading should be visible when click", () => {
//   render(<Login />);
//   const btn = screen.getByRole("button");
//   const usernameEl = screen.getByPlaceholderText(/username/i);
//   const passwordEl = screen.getByPlaceholderText(/password/i);

//   const testValue = "tesst";
//   fireEvent.change(passwordEl, { target: { value: testValue } });

//   fireEvent.change(usernameEl, { target: { value: testValue } });
//   fireEvent.click(btn);
//   expect(btn).toHaveTextContent(/please wait/i);
// });

// test("loading should not be rendered after fetching", async () => {
//   render(<Login />);
//   const btn = screen.getByRole("button");
//   const usernameEl = screen.getByPlaceholderText(/username/i);
//   const passwordEl = screen.getByPlaceholderText(/password/i);

//   const testValue = "test";

//   fireEvent.change(usernameEl, { target: { value: testValue } });
//   fireEvent.change(passwordEl, { target: { value: testValue } });
//   fireEvent.click(btn);

//   await waitFor(() => expect(btn).not.toHaveTextContent(/please wait/i));
// });
// test("loading should be rendered after fetching", async () => {
//   render(<Login />);
//   const btn = screen.getByRole("button");
//   const usernameEl = screen.getByPlaceholderText(/username/i);
//   const passwordEl = screen.getByPlaceholderText(/password/i);

//   const testValue = "test";

//   fireEvent.change(usernameEl, { target: { value: testValue } });
//   fireEvent.change(passwordEl, { target: { value: testValue } });
//   fireEvent.click(btn);

//   const userItem = await screen.findByText("John");

//   expect(userItem).toBeInTheDocument();
// });
