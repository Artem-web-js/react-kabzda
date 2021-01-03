import React, {useState, useMemo} from "react";

export default {
    title: 'useMemo'
}

const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])

    for(let i = 1; i<=b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>

        <div>Result A: {resultA}</div>
        <div>Result B: {resultB}</div>
    </>
}

const Users = React.memo((props: { users: Array<string> }) => {
    console.log("Users")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
})

export const Example1 = () => {
    console.log('Example 1')
    const [count, setCount] = useState(0);
    const [users, setUser] = useState(["Artem", "Valeriy", "Alex"])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLocaleLowerCase().indexOf('l') > -1)
    }, [users])

    return <>
        <button onClick={() => {setCount(count + 1)}}>+</button>
        {count}
        <Users users={newArray}/>
    </>
}