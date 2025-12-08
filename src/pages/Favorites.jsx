import React from "react";
import { useAddUser, useGetUsers } from "../hooks/testapi";

function Favorites() {
  //  malumot olish
  const { data, isLoading, error } = useGetUsers();
  // melumot qoshish

  const addMutation = useAddUser();
  console.log(data);

  const addUser = () => {
    addMutation.mutate();
  };

  return (
    <div className="pt-28">
      <button className="bg-red-500 text-white p-3" onClick={addUser}>
        malumot qoshish
      </button>

      <div>
        {isLoading
          ? "Yuklanmoqda"
          : data?.map((item) => (
              <div key={item.id}>
                <h1>
                  {item.id} - {item.title}
                </h1>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Favorites;
