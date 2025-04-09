import { useState } from "react";
import articles from "../data/articles";

function Main() {
    const [newArticle, setNewArticle] = useState('');
    return (
        <>
            <main className="container">
                <ul>
                    {articles.map(element =>
                        <li key={element.id}>{element.title}</li>
                    )}
                </ul>
            </main>
        </>
    )
}

export default Main;