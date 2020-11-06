import React from "react";
import {
  Eggs,
  Fats,
  Fish,
  Gluten,
  Lactose,
  Nuts,
  Peanuts,
  Sugar,
  Vegan,
} from "../../pages/shared/icons";

export default function AllergensSection() {
  return (
    <div>
      <Eggs />
      <Fats />
      <Fish />
      <Gluten />
      <Lactose />
      <Nuts />
      <Peanuts />
      {/* <Sugar/> */}
      {/* Sofi note: I have to fix the sugar icon */}
      <Vegan />
    </div>
  );
}
