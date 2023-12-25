import { useState } from "react";
import style from "./faq.module.css";

// eslint-disable-next-line react/prop-types
const FAQ = ({ title, desc }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <article className={style.faq}>
      <div>
        <h4>{title}</h4>
        <button
          onClick={() => {
            setToggle(!toggle); //Toggle will give opposite value
          }}
        >
          {toggle ? "-" : "+"}
          {/* Ternary Operator condition ? true : false */}
        </button>
      </div>
      {toggle && <p>{desc}</p>}
    </article>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
