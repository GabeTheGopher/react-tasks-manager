import React, { useState } from 'react'
import Card from '../Card'
import { Container } from './styles'
import { MdAdd } from 'react-icons/md'
import { useDrop } from 'react-dnd'

export default function List({ data }) {
  
  const [cards, setCards] = useState(data.cards)
  const [, dropRef] = useDrop({
    accept: 'CARD',
    drop(item, monitor) {
      setCards([...cards,item.card])
    }
  })
  
  // const [, drop] = useDrop(() => ({
  //   accept: 'TODO_DRAG',
  //   drop: (droppedTodo: dropAndDropItem) => {
  //     console.log('dropping');
  //     if (todoID === droppedTodo.todoID) return;
  //     resortList(todoID, droppedTodo.todoID);
  //   },}),[todoID])

  return (
    <Container done={data.done} ref={dropRef}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type='button'>
            <MdAdd size={24} color='#FFFFFF' />
          </button>
        )}
      </header>

      <ul>
        {/* {data.cards.map(card => <Card key={card.id} data={card} />)} */}
        {cards.map(card =>  <Card key={card.id} data={card} cards={cards} setCards={setCards}/>)}
      </ul>
    </Container>
  )
}
