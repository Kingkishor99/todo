import React, { useEffect, useState } from 'react'

function Todo() {
    const [a, setA] = useState([])
    const [text, setText] = useState("")


    const pu = (e) => {
        e.preventDefault()
        if (a.length < 15 && text) {
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


    const remove = (i) => {
        console.log(i)
        a.splice(i, 1)
        setA(a)
    }
    const date = new Date()



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
                            <button onClick={() => remove(i)} className='delete'></button>

                        </div>

                    </div>)}

                {(a.length < 15) ? (<div>
                    <input id='input' onChange={e => setText(e.target.value)} placeholder="Enter task..." className="input" />
                    <button className='add' onClick={e => pu(e)}><i className='calendar plus icon'></i>Add</button> </div>) : ("")}


            </ol>
        </div>
    )
}

export default Todo