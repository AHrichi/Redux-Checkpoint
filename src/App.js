import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from './Redux/Actions/Action'
import { useState } from 'react'
import List from './component/List';
import { Button, ButtonGroup } from 'react-bootstrap'

function App() {
  const dispatch = useDispatch()
  const [newText, setNewText] = useState('')
  const [all, setAll] = useState(true)
  const todos = useSelector(state => state.todos)
  return (
    <div style={{backgroundColor:'#2F4454',minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <div style={{display:'flex',margin:'10px'}}>
        <h1 style={{color:'white',margin:'10px',fontFamily:'Comic Sans MS'}} >To Do List</h1>
      </div>
      <input
        type="text"
        onChange={(e) => setNewText(e.target.value)}
        value={newText}
      />
      <ButtonGroup className="mr-2" aria-label="First group">
        <Button variant='light' style={{backgroundColor:'#116466',color:'white',margin:'10px'}} onClick={() => { if (newText !== '') { dispatch(addTask({ id: Math.random(), isDOne: false, text: newText })); setNewText('') } else { alert('text required') } }}>Add</Button>
        <Button variant='light' style={{backgroundColor:'#116466',color:'white',margin:'10px'}} onClick={() => setAll(!all)}>{all ? 'ALL' : 'DONE'}</Button>
      </ButtonGroup>
      <div className="items">
        <ul style={{listStyle:'none'}} >

          {all ? todos.map(el => <List item={el} />) : todos.filter(el => el.isDone === true).map(el => <List item={el} />)}

        </ul>
      </div>
    </div>

  );
}

export default App;
