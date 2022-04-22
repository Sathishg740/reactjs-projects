function MyApp() {

    const [bikes, setBikes] = React.useState(['Ktm', 'Ns', 'Bullet', 'apache'])
    let remove = () => {
        console.log(bikes)
        let indexOfK = bikes.indexOf('Ktm')
        console.log(indexOfK)
        if (indexOfK >= 0) {
            bikes.splice(indexOfK,1)
            setBikes(
                [...bikes]
            )
        }
    }
    return <div>
        {
            bikes.map((bike,idx) => {
                return <p key={idx+bike}>{bike}</p>
            })
        }
        <button onClick={remove}>Click</button>
    </div>
}
ReactDOM.render(<MyApp />, document.getElementById('container'))
