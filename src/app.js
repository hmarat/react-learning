const app = {
    title: "Indesicion App",
    subtitle: "Indesicion app, for solving global problems",
    options: ["One", "Two"]
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options && app.options.length > 0 ? `Here are your options` : "No options"}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)



const user = {
    name: "Marat Hakobjanyan",
    age: 20,
    location: "Armenia, Stepanakert"
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)


const rootApp = document.getElementById("app");
ReactDOM.render(template, rootApp);