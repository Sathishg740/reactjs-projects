function MyApp(){
    
    const [Name,setName]=React.useState("ajay")
    const [Age,setAge]=React.useState(20)
    let updateName=()=>{
        setName("Vijay")
    }
    return <div>
        <h1>Welcome,{Name} </h1>
        <button onClick={updateName}>Click</button>
        <h1>Age {Age} </h1>
        <button onClick={()=>{setAge(22)}}>Click</button>
    </div>
}
ReactDOM.render(<MyApp/>,document.getElementById('container'))