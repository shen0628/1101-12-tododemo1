import { useState } from "react";
import Modal_12 from "../components/Modal_12";
import Backdrop_12 from "../components/Backdrop_12";


function Todo_12(props) {
    const [showModal,setShowModal] = useState();
    
    function showModalHandler(){
        setShowModal(true);
    }

    function closeModalHandler(){
        setShowModal(false);
    }

    return (
        <div >
            <div className="card">
                <h2>{props.text}
                </h2>
                <div className="actions">
                    <button className="btn"  onClick={showModalHandler} >Delete</button>
                </div>
            </div>
            {showModal && <Backdrop_12 onClose={closeModalHandler}/>}
            {showModal && <Modal_12 text='Are you sure?' onClose={closeModalHandler}/>}
        </div>
    );
}

export default Todo_12;