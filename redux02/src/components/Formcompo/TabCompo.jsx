import { useSelector } from "react-redux"
import './TabCompo.css'

function TabCompo() {
    const users = useSelector((state)=>state.users.all)
    return(
        <div className="TabCompo">
            <div><span>firstName</span><span>lastName</span><span>Age</span></div>
            {users.map((user, index)=>(
                <div key={index}><span>{user.firstName}</span><span>{user.lastName}</span><span>{user.age} years old</span></div>
            ))}
        </div>
    )
}

export default TabCompo