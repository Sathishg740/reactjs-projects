function MyApp(){
    const[user,setUser]=React.useState({
        userName:'',
        userPwd:''
    })
    let updateNAme=(event)=>{
        setUser({
            ...user,
            userName:event.target.value,
           
        })
    }
    let updatepwd=(event)=>{
        setUser({
            //spread method to display all the content present in it
            ...user,
            userPwd:event.target.value
        })
    }
    let login=(event)=>{
        //to prevent refreshing the page
        event.preventDefault();
        console.log(user);

        //to clear the input fields after clicking login button
        setUser({
            userName:'',
            userPwd:''
        })
    }
    return <form>
        UserName:<input type="text" value={user.userName} onChange={(event)=>{updateNAme(event)}}/><br/> <br/>
        Password:<input type="password" value={user.userPwd} onChange={(event)=>{updatepwd(event)}}/><br/> <br/>
        <button onClick={login}>Login</button>
    </form>
}
ReactDOM.render(<MyApp/>,document.getElementById('container'))
