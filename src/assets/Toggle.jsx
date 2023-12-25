import { useState } from "react";

export const Toggle = () => {
  const [toggle, setTogle] = useState(true);
  return (
    <div>
      {toggle && ( //if toggle true then show paragraph
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora odio
          corrupti velit quod quasi facere officiis nulla sint, doloribus sit
          nihil error esse, amet iusto odit magni voluptatibus, cupiditate
          excepturi!
        </p>
      )}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setTogle(!toggle); //Toggle give oposite vale
          }}
        >
          {toggle ? "Hide" : "Show"}{" "}
          {/*  Ternary Operator condition ? true : false*/}
        </button>
      </div>
    </div>
  );
};
