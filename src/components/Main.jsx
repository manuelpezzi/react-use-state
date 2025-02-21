
import Languages from "./Languages";
import { useState } from "react";

const Main = () => {
    const [selectedLanguageId, setSelectedLanguageId] = useState(null);
    const handleButtonClick = (id) => {
        setSelectedLanguageId(prevId => (prevId === id ? null : id));
    }
    return (
        <main className="container">
            {/*bottoni per il linguaggio*/}
            <div className="btn-group mb.-4" role="group">
                {Languages.map(linguaggio => (
                    <div key={linguaggio.id} className="mb-3">
                        <button onClick={() => handleButtonClick(linguaggio.id)} className={`btn ${linguaggio.title === "HTML" ? "btn-warning" : "btn-primary"} me-2`}>
                            {linguaggio.title}
                        </button>
                        {selectedLanguageId === linguaggio.id && (
                            <div className="card p-3 ">
                                <p className="card-text"> {linguaggio.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </main>
    )
}
export default Main;