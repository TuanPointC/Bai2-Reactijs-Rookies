import Welcome from "./Welcome"
const ListWelcome =()=>{
    return(
        <div>
            <Welcome name="Tuan" age={20} color='red'/>
            <Welcome name="Tuan2" age={20} color='blue'/>
            <Welcome name="Tuan3" age={20} color='green'/>
        </div>
    )
}

export default ListWelcome;