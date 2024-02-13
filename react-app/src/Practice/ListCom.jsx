import React from "react";

export const ListCom = ({ layout, items }) => {
  return (
    <>
      {items.map((item, index) => (
        <ol type={`1`} key={index}>
          <li>{item}</li>
        </ol>
      ))}
    </>
  );
};
