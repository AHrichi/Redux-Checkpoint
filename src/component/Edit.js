import {Modal,Button} from 'react-bootstrap'
import {useState} from 'react'
import {editTask} from '../Redux/Actions/Action'
import {useDispatch} from 'react-redux'


function Edit({item}) {
    const [show, setShow] = useState(false);
    const [editedText, setEditedText] = useState(item.text)
    const dispatch = useDispatch()
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="dark" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <input type='text' value={editedText}
              onChange={(e)=>setEditedText(e.target.value)}
              />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{dispatch(editTask({id:item.id,text:editedText}));handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default Edit  