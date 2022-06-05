import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import Formulario from "./Formulario";
import UserContext from "../context/usuario/UsuarioState";

const MESSAGE_ERROR = {
  email: "Email no válido",
  dni: "DNI no válido",
  phoneNumber: "Celular no válido",
  licensePlate: "Placa no válida",
};

test("correct form validation", () => {
  const form = render(
    <UserContext>
      <Formulario />
    </UserContext>
  );
  const button = form.getByText("Cotízalo");
  fireEvent.click(button);
  form.getByText(MESSAGE_ERROR.email);
  form.getByText(MESSAGE_ERROR.dni);
  form.getByText(MESSAGE_ERROR.phoneNumber);
  form.getByText(MESSAGE_ERROR.licensePlate);
});

test("invalid email", async () => {
  const form = render(
    <UserContext>
      <Formulario />
    </UserContext>
  );

  const button = form.getByText("Cotízalo");

  fireEvent.change(form.getByPlaceholderText("Correo electrónico"), {
    target: { value: "fake.email@aaa" },
  });
  fireEvent.change(form.getByPlaceholderText("Celular"), {
    target: { value: "999222333" },
  });
  fireEvent.change(form.getByPlaceholderText("Placa"), {
    target: { value: "ABC-123" },
  });
  fireEvent.click(button);

  form.getByText(MESSAGE_ERROR.email);
});

test("invalid phone number", async () => {
  const form = render(
    <UserContext>
      <Formulario />
    </UserContext>
  );

  const button = form.getByText("Cotízalo");

  fireEvent.change(form.getByPlaceholderText("Correo electrónico"), {
    target: { value: "john@doe.com" },
  });
  fireEvent.change(form.getByPlaceholderText("Celular"), {
    target: { value: "99222333" },
  });
  fireEvent.change(form.getByPlaceholderText("Placa"), {
    target: { value: "ABC-123" },
  });
  fireEvent.click(button);

  form.getByText(MESSAGE_ERROR.phoneNumber);
});

test("invalid license plate", async () => {
  const form = render(
    <UserContext>
      <Formulario />
    </UserContext>
  );

  const button = form.getByText("Cotízalo");

  fireEvent.change(form.getByPlaceholderText("Correo electrónico"), {
    target: { value: "john@doe.com" },
  });
  fireEvent.change(form.getByPlaceholderText("Celular"), {
    target: { value: "999222333" },
  });
  fireEvent.change(form.getByPlaceholderText("Placa"), {
    target: { value: "ABC-CASX123" },
  });
  fireEvent.click(button);

  form.getByText(MESSAGE_ERROR.licensePlate);
});

test("submit with invalid credentials", async () => {
  const form = render(
    <UserContext>
      <Formulario />
    </UserContext>
  );

  const button = form.getByText("Cotízalo");

  fireEvent.change(form.getByPlaceholderText("Correo electrónico"), {
    target: { value: "john@doe.com" },
  });
  fireEvent.change(form.getByPlaceholderText("Celular"), {
    target: { value: "999222333" },
  });
  fireEvent.change(form.getByPlaceholderText("Placa"), {
    target: { value: "ABC-123" },
  });
  fireEvent.click(button);

  await form.findByText("No se encontró el usuario", {}, { timeout: 5000 });
});
