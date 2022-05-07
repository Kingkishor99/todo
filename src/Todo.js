import React, { useState } from 'react'

function Todo() {
    const [a, setA] = useState([])
    const [text, setText] = useState("")


    const pu = () => {
        if (a.length < 12 && text) {
            setA([...a, {
                p: text
            }])
        }
        else console.log("kkkk")


        window.localStorage.setItem("a", JSON.stringify(a))
    }


    return (
        <div>
            <ol className='todo' >
                {a.map((c, i) =>
                    <div className='wrapp' key={i}>


                        <li className='todolist'>{c.p}</li>
                        <div className='button'>
                            <input type='checkbox' className='checkbox' />
                            <button className='edit'></button >
                            <button className='delete'></button>

                        </div>

                    </div>)}
                <input onChange={e => setText(e.target.value)} />
                <button className='add' onClick={pu}><i className='calendar plus icon'>Add</i></button>

            </ol>
        </div>
    )
}

export default Todo