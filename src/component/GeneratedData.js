import React, { useState } from "react";
import { Container } from "reactstrap";
import FormData from "./InputForm";
import ModalPreview from "./ModalView";

function GeneratedData() {
  const [userData, setUserData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [number, setNumber] = useState(0);

  // Gather data from Form component and set modalShow to true
  const handleSubmitData = (userData) => {
    setUserData((prevState) => {
      return [
        ...prevState,
        {
          ...userData,
          number: String(number),
        },
      ];
    });
    setNumber(number + 1);
    setModalShow(true);
  };

  const handleResetData = () => {
    setUserData([]);
  };

  console.log(modalShow);
  console.log(userData);

  return (
    <Container fluid className="py-5">
      <div
        className="mx-auto my-5 bg-light rounded-3 border p-5"
        style={{
          width: "45%",
        }}
      >
        <FormData submitData={handleSubmitData} />
        <button className="btn btn-danger w-100 mb-3" onClick={handleResetData}>
          Reset Data
        </button>
        {modalShow && <ModalPreview user={userData} />}
      </div>
    </Container>
  );
}

export default GeneratedData;
