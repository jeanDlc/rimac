import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import ErrorMensaje from "./ErrorMensaje";

test("display correct error message", () => {
  const message = "error!!";
  const component = render(<ErrorMensaje mensaje={message} />);
  component.getByText("error!!");
});
