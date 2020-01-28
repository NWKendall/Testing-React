import React from "react";
import "@testing-library/jest-dom"
import { render, fireEvent, wait } from "@testing-library/react";
import StarWarsCharacters from "./StarWarsCharacters";
import { getData as mockData } from "../api";

jest.mock("../api");

 test(`next button loads next page of characters`, async () => {
  mockData.mockResolvedValueOnce({ 
    results: [{
      name: "Luke Skywalker"
    }],
    next: "asd",
    previous: "asd"
  })
  
  const { findByText, getByText } = render(<StarWarsCharacters />)

  const next = getByText(/next/i);
  const previous = getByText(/previous/i);

  fireEvent.click(next);
  fireEvent.click(previous);

  expect(mockData).toHaveBeenCalledTimes(1);

  await wait(() => expect(getdByText(/Luke/i)))

 })







