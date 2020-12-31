import React, {useState} from "react";

export default {
    title: 'React memo demo'
}

const NewMessagesCounter = React.memo((props: any) => {
    console.log("Count")
    return <div>{props.count}</div>
})

const Users = React.memo((props: { users: Array<string> }) => {
    console.log("Users")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
})

export const Example1 = () => {
    const [count, setCount] = useState(0);
    const [users, setUser] = useState(["Artem", "Valeriy", "Alex"])

    const addUser = () => {
        const newUser = [...users, "Sveta" + new Date().getTime()]
        setUser(newUser)
    }

    return <>
        <button onClick={() => {setCount(count + 1)}}>+</button>
        <button onClick={addUser}>Add User</button>
        <NewMessagesCounter count={count}/>
        <Users users={users}/>
    </>
}