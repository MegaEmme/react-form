import articles from "../data/articles";

function Main() {
    for (let index = 0; index < articles.length; index++) {
        console.log(articles[index].title)
    }
    return (
        <>
            <div>ciao</div>
        </>
    )
}

export default Main;