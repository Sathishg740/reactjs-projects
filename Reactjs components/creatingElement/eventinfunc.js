function Event(props){
    const getData=()=>{
        console.log(props.name);
        alert("Welcome to React");
    }
    return(
        <div>
            <button onClick={()=>getData()}>Click</button>
        </div>
    )
}
ReactDOM.render(<Event name="Hello" />,document.getElementById('container'))