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

    const removeArticle = i => {
        const deletedArticles = article.filter((article, index) => {
            return index !== i
        })
        setArticle(deletedArticles);
    }


    return (
        <>
            <form onSubmit={addArticle}>
                <main className="container">
                    <ul>
                        {article.map((element, index) =>
                            <li className="p-3" key={index}>{element}
                                <hr />
                                <button className="btn btn-danger" onClick={() => removeArticle(index)}><i className="fa-regular fa-trash-can"></i></button></li>
                        )}
                    </ul>
                    <input type="text"
                        onChange={e => { setNewArticle(e.target.value) }}
                        placeholder="Inserisci nuovo gioco"
                    />
                    <button className="btn btn-primary mx-4"><i className="fa-solid fa-plus"></i></button>

                </main>
            </form>
        </>
    )
}

export default Main;