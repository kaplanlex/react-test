const LangSwitcher = () => {
    const selectId = useId();
    const [lang, setLang] = useState("uk");

    return (
        <div>
            <label htmlFor={selectId}>Choose language</label>
            <select
                id={selectId}
                value={lang}
                onChange={(evt) => setLang(evt.target.value)}
            >
                <option value="uk">Ukrainian</option>
                <option value="en">English</option>
                <option value="pl">Polish</option>
            </select>
        </div>
    );
};

{/*import { useState } from "react";
import { LangSwitcher } from "./LangSwitcher";
import "./styles.css";

export default function App() {
  const [lang, setLang] = useState("uk");

  return (
    <>
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
    </>
  );
}
 */}
