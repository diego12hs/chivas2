import React, {useState} from "react";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
export const Tarea=()=>{
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [career, setCareer] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleIdChange = (event) => {
        setId(event.target.value)
    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleCareerChange = (event) => {
        setCareer(event.target.value)
    }
    const handleImageUpload = (event) => {
        const file = event.target.files?.[0]
        const reader = new FileReader()
        reader.addEventListener('load', () => {
            setImageUrl(reader.result)
        })
        if (file) {
            reader.readAsDataURL(file)
        }
    }

    const alumnos=[]
    const [alumn,setAlumn]=useState(alumnos)

    const [showModal, setShowModal] = useState(false)
    const handleShowModal=()=>{
        setShowModal(true)
    }
    const handleCloseModal=()=>{
        setShowModal(false)
    }
    const [edit, setEdit] = useState(false)
    const [buttonSubmitText, setButtonSubmitText] = useState('Add')
    const [indexToEdit, setIndexToEdit] = useState(0)
    const modalStyle = {
        position: 'absolute',
        top: '30%',
        left: '75%',
        transform: 'translate(-40%, -40%)',
        zIndex: 1,
        backgroundColor: '#31626e',
        padding: '20px',
        boxShadow: '0 0 60px rgba(0, 0, 0, 0.9)'
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(id==''||name==''||career==''||imageUrl==''){
            alert('NO ESTAN LLENOS')
        }else{
            if(edit==false){
                setAlumn([...alumn,{id:id,name:name,career:career,image:imageUrl}])
            }else{
                alumn[indexToEdit]={...alumn[indexToEdit],id:id,name:name,career:career,image:imageUrl}
                setAlumn(alumn)
                setButtonSubmitText('AGREGAR')
                setEdit(false)
            }
            setShowModal(false)
            setId('')
            setName('')
            setCareer('ISIC')
            setImageUrl('')
        }
    }

    const deleteElement=(id)=>{
        setAlumn(alumn.filter(obj => obj.id !== id))
    }
    const editElement=(index)=>{
        setId(alumn[index].id)
        setName(alumn[index].name)
        setCareer(alumn[index].career)
        setImageUrl(alumn[index].image)
        setEdit(true)
        setButtonSubmitText('EDIT')
        setIndexToEdit(index)
        handleShowModal()
    }
    return(
        <>
            <div style={{textAlign:"left"}}>
                <button id={"buttonAddNew"} onClick={()=>handleShowModal()}>NUEVO ARCHIVO</button>
            </div>
            {showModal &&
                <Modal isOpen={showModal} toggle={()=>handleShowModal()}>

                    <form onSubmit={handleSubmit}>
                        <ModalHeader className="fondoAr">ALUMNOS</ModalHeader>
                        <ModalBody className="fondoM">
                        <input type={"file"} accept={"image/*"} onChange={handleImageUpload}/>
                        <br />
                        <label>
                            NC:<input id={"inputs"} type={"number"} value={id} onChange={handleIdChange}/>
                        </label>
                        <br/><br/>
                        <label>
                            NOMBRE:<input id={"inputs"} type={"text"} value={name} onChange={handleNameChange}/>
                        </label>
                        <br/><br/>
                        <label>
                            CARRERA:
                            <select id={"inputs"} value={career} onChange={handleCareerChange}>
                                <option value={"ISIC"}>ISIC</option>
                                <option value={"Quimica"}>Quimica</option>
                                <option value={"TICs"}>TICs</option>
                                <option value={"Civil"}>Civil</option>
                                <option value={"Industrial"}>Industrial</option>
                                <option value={"Administracion"}>Administracion</option>
                                <option value={"Mecatronica"}>Mecatronica</option>
                                <option value={"Logistica"}>Logistica</option>
                            </select>
                        </label>
                        </ModalBody>
                        <ModalFooter style={{backgroundColor: "#0cdcef"}}>
                        <button id={"buttonAdd"} type={"submit"}>{buttonSubmitText}</button>
                        <button id={"buttonCancel"} onClick={handleCloseModal}>CANCELAR</button>
                        </ModalFooter>

                    </form>
                </Modal>
            }
            <div id={"contenedor"}>
                <table border={7} style={{margin:"10px",textAlign:"center"}}>
                    <thead>
                    <tr>
                        <th id={"th2rem"}>ID</th>
                        <th style={{width:"3rem"}}>NC</th>
                        <th id={"th8rem"}>NOMBRE</th>
                        <th id={"th8rem"}>CARERRA</th>
                        <th style={{width:"15rem"}}>IMAGEN</th>
                        <th id={"th2rem"}></th>
                        <th id={"th2rem"}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        alumn.map((item,index)=>(
                            <tr>
                                <td>{index}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.career}</td>
                                <td><img src={item.image} width={"200px"} height={"100px"}/></td>
                                <td><button id={"buttonAdd"} onClick={()=>editElement(index)}>EDIT</button></td>
                                <td><button id={"buttonCancel"} onClick={()=>deleteElement(item.id)}>BORRAR</button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Tarea