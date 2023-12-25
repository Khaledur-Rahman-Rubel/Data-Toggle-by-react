import { useState } from "react";

import style from "./faqs.module.css";

import { faqsData } from "./data";
import FAQ from "./FAQ";

const FAQS = () => {
  // eslint-disable-next-line no-unused-vars
  const [faqs, setFaqs] = useState(faqsData);

  return (
    <main className={style.container}>
      <section className={style.faqs}>
        <h1>Faqs</h1>
        {faqs.map((faq) => (
          <FAQ key={faq.id} {...faq} /> //send al faq data by {...faq} this oparetor
        ))}
      </section>
    </main>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQS;
