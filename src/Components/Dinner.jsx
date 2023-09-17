import { createClient } from "contentful";
import { useEffect, useState } from "react";
import Noodles from "./Vegbiryani";
import Rice from "./Pasta";
import Salad from "./SmokyVegPatties";
import { NavLink, Route, Routes } from "react-router-dom";

export default function Pranita() {
  const [recipes, setReceips] = useState();
  const client = createClient({
    space: "0q4y2er5mofe",
    accessToken: "BfNWgp-dFg2W-jxgkIPYNce0IS8N6g9LJT1JA1uTbGQ",
  });
  const getData = async () => {
    const entryItems = await client.getEntries();
    console.log("ENTRIES: ", entryItems.items);
    setReceips(entryItems.items);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {recipes &&
        recipes?.map((element) => {
          if (element.fields.foodName === "Veg Biryani") {
            return (
              <>
                {/* <h1>{element.fields.foodName}</h1> */}
                <Noodles />
              </>
            );
          } else if (
            element.fields.foodName ===
            "Pasta pesto WITH GARLIC & ROSEMARY CHICKEN"
          ) {
            return (
              <>
                {/* <h1>{element.fields.foodName}</h1> */}
                <Salad />
              </>
            );
          } else if (element.fields.foodName === "Smoky Veg Patties") {
            return (
              <>
                {/* <h1>{element.fields.foodName}</h1> */}
                <Rice />
              </>
            );
          }
        })}
    </>
  );
}
