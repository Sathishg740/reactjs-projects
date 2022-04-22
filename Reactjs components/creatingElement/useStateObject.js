function MyApp1(){

    const [person, setPerson]=React.useState({
        firstName:"Ajay",
        lastName:"kumar"
    })
    let updateName=()=>{
        setPerson({
            ...person,
            firstName:"sujay"
        })
    }
    return <div>
        <h1>FirstName:{person.firstName} </h1>
        <h1>FirstName:{person.lastName} </h1>
        <button onClick={updateName}>Click</button>
    </div>
}
ReactDOM.render(<MyApp1 />,document.getElementById('container'))