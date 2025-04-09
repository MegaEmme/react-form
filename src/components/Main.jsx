import articles from "../data/articles";

function Main() {
    return (
        <>
            <ul>
                {articles.map(element =>
                    <li key={element.id}>{element.title}</li>
                )}
            </ul>
        </>
    )
}

export default Main;