let count = 0;

const addOne = () =>{
    count++;
    renderCountingApp()
}

const minusOne = () =>{
    count--;
    renderCountingApp()
}

const reset = () => {
    count = 0;
    renderCountingApp()
}

const renderCountingApp = () =>{
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
    
    ReactDOM.render(templateTwo, rootApp);
}

renderCountingApp()