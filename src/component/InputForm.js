import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form, Input, Label, FormGroup } from "reactstrap";
import React, { useState } from "react";
import "./InputForm.css";

function InputForm(props) {
    const [nama, setNama] = useState("");
    const handleNama = (e) => {
        setNama(e.target.value);
    }

    const [pekerjaan, setPekerjaan] = useState("");
    const handlePekerjaan = (e) => {
        setPekerjaan(e.target.value);
    }

    const [ttl, setTtl] = useState("");
    const handleTtl = (e) => {
        setTtl(e.target.value);
    }

    const [jeniskelamin, setJeniskelamin] = useState("");
    const handleJeniskelamin = (e) => {
        setJeniskelamin(e.target.value);
    }

    const [agama, setAgama] = useState("");
    const handleAgama = (e) => {
        setAgama(e.target.value);
    }

    const [nomerhp, setNomerhp] = useState ("");
    const handleNomerhp = (e) => {
        setNomerhp(e.target.value);
    }

    const [email, setEmail] = useState ("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const [foto, setFoto] = useState("");
    const handleFoto = (e) => {
        if (e.target.files.length > 0) {
            let src = URL.createObjectURL(e.target.files[0]);
            setFoto(src);  
        }

    }
    function handleSubmit(event) {
        event.preventDefault();

        const user = {
            nama: nama,
            pekerjaan: pekerjaan,
            ttl: ttl,
            jeniskelamin: jeniskelamin,
            agama: agama,
            nomerhp: nomerhp,
            email: email,
            foto: foto,
        };
        props.submitData(user);
    }

    return (
        <div>
            <Form className="needs-validation mb-2" onSubmit={handleSubmit}>
            <h4 className="#"> Form Inputan</h4>
            <FormGroup row>
                <Label for="name" sm={4}> Nama </Label>
                <Col sm={8}>
                    <Input id="nama" name="nama" type="text" onChange={handleNama}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="kerjaan" sm={4}> Pekerjaan </Label>
                <Col sm={8}>
                    <Input id="pekerjaan" name="pekerjaan" type="text" onChange={handlePekerjaan} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="ttl" sm={4}> Tanggal Lahir </Label>
                <Col sm={8}>
                    <Input id="ttl" name="ttl" onChange={handleTtl}/>
                </Col>
            </FormGroup>
            <FormGroup row tag="fieldset">
                <legend className="col-form-label col-sm-4 text start">Jenis Kelamin</legend>
                <Col sm={8}>
                    <FormGroup check className="text-start">
                        <Input name="jeniskelamin" type="radio" value="laki-laki" onChange={handleJeniskelamin} />
                        <Label check> Laki-laki</Label>
                    </FormGroup>
                    <FormGroup check className="text-start">
                        <Input name="jeniskelamin" type="radio" value="perempuan" onChange={handleJeniskelamin} />
                        <Label check> Perempuan</Label>
                    </FormGroup>
                 </Col>
                 <FormGroup row>
                     <Label for="agama" sm={4}> Agama </Label>
                     <Col sm={8}>
                         <Input id="agama" name="agama" type="select" onChange={handleAgama}>
                             <option value="budha"> Budha </option>
                             <option value="hindu"> Hindu </option>
                             <option value="kristen"> Kristen </option>
                             <option value="katolik"> Katolik </option>
                             <option value="islam"> Islam </option>
                             <option value="lainnya"> Lainnya </option>
                         </Input>
                     </Col>
                 </FormGroup>
                 <FormGroup row>
                     <Label for="nomerhp" sm={4}>Nomer Handphone</Label>
                     <Col sm={8}>
                         <Input id="nomerhp" name="nomerhp" type="number" onChange={handleNomerhp} />
                     </Col>
                 </FormGroup>
                 <FormGroup row>
                     <Label for="email" sm={4}> Email </Label>
                         <Col sm={8}>
                         <Input id="email" name="email" type="email" onChange={handleEmail} />
                         </Col>
                 </FormGroup>
                 <FormGroup row>
                     <Label for="foto" sm={4}> Foto </Label>
                     <Col sm={8}>
                     <Input id="foto" name="foto" type="file" onChange={handleFoto} />
                     </Col>                         
                 </FormGroup>
                 <Button color="primary w-100"> Submit </Button>
            </FormGroup>
            </Form>
        </div>
    )
}

export default InputForm;