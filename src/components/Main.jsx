
import Languages from "./Languages";
import { useState } from "react";

const Main = () => {
    const [selectedLanguageId, setSelectedLanguageId] = useState(null);
    const handleButtonClick = (id) => {
        setSelectedLanguageId(prevId => (prevId === id ? null : id));
    }
    return (
        <main>
            {/*bottoni per il linguaggio*/}
            <div className="btn-group mb.-4" role="group">
                {Languages.map(linguaggio => (
                    <div key={linguaggio.id}>
                        <button onClick={() => handleButtonClick(linguaggio.id)}>
                            {linguaggio.title}
                        </button>
                        {selectedLanguageId === linguaggio.id && (
                            <div>
                                {linguaggio.description}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </main>
    )
}
export default Main;