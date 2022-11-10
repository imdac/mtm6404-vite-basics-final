import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import Container from './components/Container'
import Row from './components/Row'
import Col from './components/Col'
import Alert from './components/Alert'
import ListGroup from './components/ListGroup'
import ListGroupItem from './components/ListGroupItem'

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([
    { id: 1, text: 'Milk', active: true },
    { id: 2, text: 'Eggs', active: false },
    { id: 3, text: 'Bread', active: false }
  ])

  function onItemClickHandler (id) {
    console.log(id)

    // setItems - two options
    // setItems([...])
    // setItems((prevState) => [...])
    // setItems(items.map(...)) - MAY NOT WORK
    // setItems((items) => items.map(...)) - BETTER

    // DELETE ALL ITEMS
    // setItems([])
    
    setItems(prevState => prevState.map(item => 
      item.id === id ? { ...item, active: true } : { ...item, active: false }))
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Hello World</h1>
          <Alert variant="danger">
            Danger! Danger!
          </Alert>
          <Alert variant="success">
            It Works!
          </Alert>

          <ListGroup>
            {items.map(item => (
              <ListGroupItem key={item.id} active={item.active} 
                id={item.id}
                onItemClick={onItemClickHandler}>
                {item.text}
              </ListGroupItem>))}
          </ListGroup>
        </Col>
      </Row> 
    </Container>
  )
}

export default App
