import { createElement, Fragment } from "react";
import { fireEvent, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import ContactSection from "../components/ContactSection";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { renderWithProvider } from "./test-utils";

it("switches contact language while preserving the working email link", () => {
  renderWithProvider(createElement(Fragment, null,
    createElement(LanguageSwitcher), createElement(ContactSection)));

  expect(screen.getByRole("heading", { name: /Contact$/ })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "RU" }));
  expect(screen.getByRole("heading", { name: /Контакты$/ })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "sagolubev@outlook.com" }))
    .toHaveAttribute("href", "mailto:sagolubev@outlook.com");
});
