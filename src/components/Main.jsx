import { useState } from "react";
// import articles from "../data/articles";
// console.log(articles);

function Main() {

    const [article, setArticle] = useState([
        "The Legend of Zelda: Breath of the Wild",
        "Red Dead Redemption 2",
        "The Last of Us Part II",
        "Super Mario Odyssey",
        "Minecraft"
    ]);
    const [newArticle, setNewArticle] = useState('');

    const addArticle = event => {
        event.preventDefault();
        const updatedArticles = [...article, newArticle];
        setArticle(updatedArticles);
        console.log('Aggiunto: ' + newArticle);
    }

    return (
        <>
            <form onSubmit={addArticle}>
                <main className="container">
                    <ul>
                        {article.map((element, index) =>
                            <li key={index}>{element}</li>
                        )}
                    </ul>
                    <input type="text"
                        onChange={e => { setNewArticle(e.target.value) }}
                    />
                    <button className="btn btn-primary mx-4"><i className="fa-solid fa-plus"></i></button>
                    <button className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
                </main>
            </form>
        </>
    )
}

export default Main;