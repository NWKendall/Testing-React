import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import StarWarsCharacters from "./StarWarsCharacters";

test(`renders the starwars API list of characters`, () => {

 const { getByText } = render(<StarWarsCharacters />)

 const next = getByText(/next/i);
 const previous = getByText(/previous/i);

 });








