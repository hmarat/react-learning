const app = {
     title: "Toggle app",
     isOpened: false,
     subtitle: "This is app working with Toggle"
}

const toggleHandler = () =>{
    app.isOpened = !app.isOpened;
    renderApp()
}

const renderApp = () =>{
    const template = (
        <div>
        <h1>{app.title}</h1>
        <button onClick={toggleHandler}>{app.isOpened ? "Close" : "Open"}</button>
        {app.isOpened && (
            <p>{app.subtitle}</p>
        )}
    </div>
    )
    
    ReactDOM.render(template, document.getElementById("app"));
}

renderApp()