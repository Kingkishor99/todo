import React, { useEffect, useState } from 'react'

function Todo() {
    const [a, setA] = useState([])
    const [text, setText] = useState("")
    const [action, setAction] = useState(1)


    const pu = (e) => {
        e.preventDefault()
        if (a.length < 12 && text) {
            setA([...a, {
                p: text
            }])


        }
        else console.log("kkkk")


        window.localStorage.setItem("a", JSON.stringify(a))


    }
    const edit = (id) => {
        // console.log(id)
    }


    const remove = (c) => {
        console.log(c)
        a.splice(c.i, 1)
        setA(a)
        setAction(0)
        alert(`Task deleted "${c.p}"`)
    }

    const date = new Date()
    if (action == 0) {
        return <Todo />
    }



    return (
        <div>
            <ol className='todo' >
                <div>
                    <span className='to-do'>To-Do list for {date.getDate()}-{date.getMonth()}-{date.getFullYear()} </span>

                </div>

                {a.map((c, i) =>
                    <div className='wrapp' key={i}>


                        <li className='todolist'>{c.p}</li>
                        <div className='button'>
                            <input type='checkbox' className='checkbox' />
                            <button onClick={() => edit(i)} className='edit'></button >
                            <button onClick={() => remove(c)} className='delete'></button>

                        </div>

                    </div>)}

                {(a.length < 12) ? (<div>
                    <input id='input' onChange={e => setText(e.target.value)} placeholder="  Enter task..." className="input" />
                    <button className='add' onClick={e => pu(e)}><i className='calendar plus icon'></i>Add</button> </div>) : ("")}


            </ol>
        </div>
    )
}

export default Todo