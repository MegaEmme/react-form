function Header(props) {
    const title = props.Title;
    return (
        <>
            <header className="p-3 mb-4 text-center bg-danger-subtle text-danger">
                <h1>{title}</h1>
            </header>
        </>
    )
};

export default Header;