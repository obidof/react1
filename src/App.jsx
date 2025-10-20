import React from "react";

const App = () => {

  const users = [
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
  ]

  const elements = () => {
    return (
      <div>
        <h1>Salom react dasturchilar</h1>
      </div>
    )
  }

  // const myalert = (name) => {
  //   alert(`💎hello ${name}💎`)
  // }

  return (
    <div>  
      {/* <div>
        <button
          onClick={() => myalert('react')} className="btn">Click me
        </button>
      </div> */}


      <div className="userbox">
        {
          users.map((user) => (
            <div key={user.id} className="user">
              <h2>{user.name} {user.age}</h2>
              <p>{user.job}</p>
              <p>{user.desc}</p>
              <button>Get me</button>

            </div>
          ))
        }
        {elements()}

      </div>
    </div>
  )



}
export default App;


