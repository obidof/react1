import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 2,
  borderRadius: "10px",
  outline: "none",
};

export default function UpdateModal({ elon, elonlar, setElonlar, children }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [image, setImages] = useState("");
  const [prise, setprices] = useState("");
  const [name, setname] = useState("");

  // --------------- update -----------
  const handleSumbit = (e) => {
    e.preventDefault();
    const updateData = { id: elon.id, name, prise, image };
    elonlar[0] = updateData;
    setElonlar(elonlar);
  };

  return (
    <div>
      <button onClick={handleOpen}>{children}</button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CgClose
            onClick={handleClose}
            className="absolute right-4 cursor-alias"
          />

          <form onSubmit={handleSumbit}>
            <h1 className="text-3xl text-center my-3">Maxsulot qo'shish</h1>

            <input
              onChange={(e) => setname(e.target.value)}
              className="w-full border rounded-xl p-2 mt-3"
              type="text"
              defaultValue={elon.name}
              placeholder="maxsulot nomi"
            />

            <input
              onChange={(e) => setprices(e.target.value)}
              className="w-full border rounded-xl p-2 mt-3"
              type="number"
              placeholder="maxsulot narxi"
              defaultValue={elon.prise}
            />
            <input
              onChange={(e) => setImages(e.target.value)}
              className="w-full border rounded-xl p-2 mt-3"
              type="text"
              placeholder="maxsulot rasmni"
              defaultValue={elon.image}
            />
            <button className="mt-4 bg-blue-500 text-white text-xl px-6 py-2 rounded-xl active:scale-95">
              Saqlash
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}