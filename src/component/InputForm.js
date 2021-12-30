import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form, Input, Label, FormGroup } from "reactstrap";
import React, { useState } from "react";



function InputForm(props) {
    const [formUser, setFormUser] = useState([]);
    const [
      user = {
        nama: "",
        tanggalLahir: "",
        pekerjaan: "",
        jeniskelamin: "",
        agama: "",
        kontak: "",
        email: "",
        foto: "",
      },
      setUser,
    ] = useState("");
  
    const handleAvatar = (e) => {
      let src = URL.createObjectURL(e.target.files[0]);
      setUser({ ...user, [e.target.name]: src });
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
      console.log(e.target.files);
    };
  
    const handleSubmit = (event) => {
      // Prevent from form submission to server
      event.preventDefault();
      // Gather all data from input
      setFormUser([...formUser, user]);
      setUser(user);
  
      props.submitData(user);
    };
  
    return (
      <div>
        <Form
          className="needs-validation mb-2"
          action="#"
          onSubmit={handleSubmit}
        >
          <h4 className="fw-bold text-center mb-4">Form Data</h4>
          <FormGroup row>
            <Label for="nama" sm={4}>
              Name
            </Label>
            <Col sm={8}>
              <Input
                id="nama"
                name="nama"
                type="text"
                value={user.nama}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="pekerjaan" sm={4}>
              Job
            </Label>
            <Col sm={8}>
              <Input
                id="pekerjaan"
                name="pekerjaaan"
                type="text"
                value={user.pekerjaan}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="tglLahir" sm={4}>
              Birthdate
            </Label>
            <Col sm={8}>
              <Input
                id="tanggalLahir"
                name="tanggalLahir"
                type="date"
                value={user.tanggalLahir}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row tag="fieldset">
            <legend className="col-form-label col-sm-4 text-start">Gender</legend>
            <Col sm={8}>
              <FormGroup check className="text-start">
                <Input
                  name="jeniskelamin"
                  type="radio"
                  value="male"
                  onChange={handleChange}
                />
                <Label check>Male</Label>
              </FormGroup>
              <FormGroup check className="text-start">
                <Input
                  name="jeniskelamin"
                  type="radio"
                  value="female"
                  onChange={handleChange}
                />
                <Label check>Female</Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="agama" sm={4}>
              Religion
            </Label>
            <Col sm={8}>
              <Input
                id="agama"
                name="agama"
                type="select"
                value={user.agama}
                onChange={handleChange}
              >
                <option value="islam">Islam</option>
                <option value="kristen">Kristen</option>
                <option value="katolik">Katolik</option>
                <option value="hindu">Hindu</option>
                <option value="budha">Budha</option>
                <option value="lainnya">Lainnya</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="kontak" sm={4}>
              Phone Number
            </Label>
            <Col sm={8}>
              <Input
                id="kontak"
                name="kontak"
                type="text"
                value={user.kontak}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="email" sm={4}>
              Email
            </Label>
            <Col sm={8}>
              <Input
                id="email"
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="email" sm={4}>
              Photo
            </Label>
            <Col sm={8}>
              <Input
                id="foto"
                name="foto"
                type="file"
                accept="image/*"
                onChange={handleAvatar}
              />
            </Col>
          </FormGroup>
          <Button color="primary w-100">Submit</Button>
        </Form>
      </div>
    );
  }
  export default InputForm;