import { useState } from "react";

const translations = {
  en: "This is for languages",
  fr: "Ceci est pour les langues",
  es: "Esto es para los idiomas",
};

const Task12 = () => {
  const [language, setLanguage] = useState("en");

  return (
    <div>
      <h1>Hi there</h1>
      <label htmlFor="language">Select Language</label>
      <select
        className="bg-black"
        id="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
      </select>

      <div id="lang-div" lang={language}>
        <p>{translations[language]}</p>
      </div>
    </div>
  );
};

export default Task12;
