import React from "react";
import data from "./dataExample.json";
export default function Togo() {
  return (
    <div>
      <h1>{data.title}</h1>
      <h2>{data.artistDisplayName}</h2>
    </div>
  );
}
