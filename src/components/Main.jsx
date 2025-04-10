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
        setNewArticle('');
    }

    const removeArticle = i => {
        const deletedArticles = article.filter((article, index) => {
            return index !== i
        })
        setArticle(deletedArticles);
    }

    const modifyArticle = i => {
        const modifiedArticle = prompt('inserisci modifica');
        // const modifiedArticle = <input type="text"
        //     placeholder="inserisci modifica" />
        const newList = [];
        article.forEach((article, index) => {
            index === i ? newList.push(modifiedArticle) : newList.push(article)
        })
        setArticle(newList);
    }


    return (
        <>
            <form onSubmit={addArticle}>
                <main className="container">
                    <ul>
                        {article.map((element, index) =>
                            <li className="fs-4 p-3" key={index}>{element}
                                <hr />
                                <button className="btn btn-danger me-2" onClick={() => removeArticle(index)}><i className="fa-regular fa-trash-can"></i></button>
                                <button className="btn btn-success" onClick={() => modifyArticle(index)}><i className="fa-solid fa-pen"></i></button>

                            </li>
                        )}
                    </ul>
                    <input type="text"
                        onChange={e => { setNewArticle(e.target.value) }}
                        placeholder="Inserisci nuovo gioco"
                        value={newArticle}
                    />
                    <button className="btn btn-primary mx-4 mb-2"><i className="fa-solid fa-plus"></i></button>

                </main>
            </form>
        </>
    )
}

export default Main;