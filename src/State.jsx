import React from "react";
import { useState } from "react";

// ====================================================

const State = () => {

    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'sardorbek',
            age: 17,
            job: 'student',
        },
        {
            id: 2,
            name: 'nasimxon',
            age: 16,
            job: 'developer',
        },
        {
            id: 3,
            name: 'mubasher',
            age: 12,
            job: 'student',
        },
    ])

// ====================================================

    const [data, SetData] = useState(users[0]);

    const [open, setOpen] = useState(false)

    const handleDelete = (id) => {
        const filtereduser = users.filter((item) => item.id !== id)
        setUsers(filtereduser)
    }

    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [job, setjob] = useState("")
    const [desc, setdesc] = useState("")

    const addFunction = (e) => {
        e.preventDefault()
        const newuser = {
            id: users.length + 1, name, age, job, desc
        }

        setUsers([...users, newuser])
        setname('')
        setage('')
        setjob('')
        setdesc('')
    }

// ====================================================

    return (
        <div>
{/* ========================================================================================================================================= */}

            <button onClick={() => setOpen(!open)}>{open ? 'open form' : 'close form'}</button>

            {open && <form onSubmit={addFunction}>
                <input value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder="name" required />
                <input value={age} onChange={(e) => setage(e.target.value)} type="text" placeholder="age" required />
                <input value={job} onChange={(e) => setjob(e.target.value)} type="text" placeholder="job" required />
                <input value={desc} onChange={(e) => setdesc(e.target.value)} type="text" placeholder="desc" required />
                <button>Send</button>
            </form>}

{/* ========================================================================================================================================= */}

            <h1 className="title">Tanlangan: {data.name}</h1>
            <div className="userbox">
                {
                    users.map((user) => (
                        <div key={user.id} className="user">
                            <h2>{user.name} {user.age}</h2>
                            <p>{user.job}</p>
                            <p>{user.desc}</p>
                            <button className="btn" onClick={() => SetData(user)}>Get me</button>
                            <button className="btn" onClick={() => handleDelete(user.id)}>delete</button>

                        </div>
                    ))
                }

            </div>

{/* ========================================================================================================================================= */}

        </div >


    )
}

// ====================================================

export default State


// ======================   library  ==============================


// useState kengaytmasi
// let open = 'ism'

// const SetOpen = () => {

// }

// export qilishni 3 xil usuli bor
// 1 export component - olishda {component name}

// 2 export default component - olish ixtiyoriy nom qoyiladi katta harfda
