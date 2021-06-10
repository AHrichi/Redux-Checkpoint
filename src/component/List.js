import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, doneTask } from '../Redux/Actions/Action'
import Edit from './Edit'
import { Button, ButtonGroup } from 'react-bootstrap'

function List({ item }) {
    const dispatch = useDispatch()
    return (
        <div style={{borderColor:'white',borderStyle:'solid',borderRadius:'15px',padding:'10px',maxWidth:'500px',wordWrap:'break-word',margin:'10px',backgroundColor:'#FFCB9A'}} >
            <li style={item.isDone ? { textDecoration: 'line-Through', color: '#2C3135' } : { color: '#2C3135' }} ><h3>{item.text}</h3></li>
            <ButtonGroup className="mr-2" aria-label="First group">
                <Button variant='light' style={{ backgroundColor: "#D79922" }} onClick={() => dispatch(deleteTask(item.id))}>Delete</Button>
                <Edit item={item} />
                <Button variant={item.isDone ? "success" : "danger"} onClick={() => dispatch(doneTask(item.id))}>{item.isDone ? 'done' : 'undone'}</Button>
            </ButtonGroup>



        </div>
    )
}

export default List
