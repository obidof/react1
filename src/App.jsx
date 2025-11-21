import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import BasicModal from "./Modal";
import UpdateModal from "./updatemodal";


function App() {

 let [elonlar, setElonlar] = useState([
    {
      id: 1,
      name: "Iphone promax",
      prise: "1200000",
      image:
        "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
    },
    {
      id: 2,
      name: "Samsung s 24 ultra",
      prise: "000000",
      image:
        "https://www.samsungmobilepress.com/file/A20AFBC5AD503566965D392E91618742CB5DA27E14BFBBBADB87121B0A7ADA2078CC174B3F38A9FF96D50E1755011F979945C4E8CC725F605687D548951D40042242598D49AD0FD2FE86B85085CC6B6B90A646A444171535D60D76DF97C05E7A48C83E1E1A8078C5409B9376961B65778895555E5F9B8419B4A818F4E3E68C78B656E8256E34DA4C010E876A0E95755657DB1692B07772FA731AD9A0A333FB1F",
    },
  ]);

  //delete
  const handleDelete = (id) => {
    let result = elonlar.filter((item) => item.id !== id);
    setElonlar(result)
  }

  return (
    <div>
      <nav className="bg-[#010132] text-white  py-4 px-12 flex justify-between text-2xl">
        <h1>Elonlar ro'yhati</h1>
        <div className="flex items-center gap-3">
          Savat <FaCartShopping />
        </div>
      </nav>
      <button className="border border-white fixed top-[40%] transform rotate-90 translate-x-[-30px]">
        <BasicModal elonlar={elonlar} setElonlar={setElonlar} />
      </button>
      <main className="grid grid-cols-4 max-md:grid-cols-4 max-sm:grid-cols-1 px-16 py-6 gap-5">
        {elonlar.map((item) => (
          <div className="bg-white rounded-xl overflow-hidden" key={item.id}>
            <img className="w-full" src={item.image} alt={item.name} />
            <div className="p-4">
              <p className="text-xl"> Narxi: {item.prise}</p>
              <h1 className="text-xl">{item.name}</h1>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 mt-3 px-6 py-2 rounded-xl text-white active:scale-95"
              >
                Ochirish
              </button>
              <UpdateModal
                elon={item}
                elonlar={elonlar}
                setElonlar={setElonlar}
              >
                <button className=" ml-3 bg-orange-500 mt-3 px-6 py-2 rounded-xl text-white active:scale-95">
                  Yangilash
                </button>
              </UpdateModal>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App