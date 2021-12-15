import "./App.css";
import { useState } from "react";
import InputForm from "./component/InputForm";
import ModalView from "./component/ModalView";
import {Container} from "reactstrap";


function App() {
  const [userData, setUserData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [number, setNumber] = useState(0);


const handleSubmitData = (userData) => {
  setUserData ((prevState) => {
    return [
      ...prevState,
      {
        ...userData, number: String(number),
      }
    ]
  });

  setNumber(number + 1);
  setModalShow(true);
}

const handleResetData = () => {
  setUserData([]);
}

console.log (modalShow);
console.log (userData);


return (
  <Container fluid>
    <div className="mx-auto my-4 bg-light rounded-3 border p-5"
      style={{width: "45%"}}>
      
      <InputForm submitData={handleSubmitData} />
      <button className="btn btn-danger w-100 mb-3" onClick={handleResetData}> Reset Data </button>
      {modalShow && (
        <ModalView user={userData} />
      )}
    </div>
  </Container>
);
      }
export default App;
