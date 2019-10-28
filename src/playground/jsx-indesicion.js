const app = {
    title: "Indesicion App",
    subtitle: "Indesicion app, for solving global problems",
    options: []
}

const rootApp = document.getElementById("app");

const onSubmitHandler = e =>{
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        e.target.elements.option.value = "";
        app.options.push(option)
        renderTemplate()
    }
}

const onRemoveAll = () => {
    app.options = [];
    renderTemplate();
}

const onDisicionMaker = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];

    alert(option)
}

const renderTemplate = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? `Here are your options` : "No options"}</p>
            <p>{app.options.length}</p>
            <button onClick={onDisicionMaker} disabled={app.options.length === 0}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove all</button>
            <ol>
                {app.options.map((option, index) => <li key={index}>{option}</li>)}
            </ol>
            <form onSubmit={onSubmitHandler}>
                <input name="option" type="text"/>
                <button>Add Options</button>
            </form>
        </div>
    )

    ReactDOM.render(template, rootApp);
}

renderTemplate()