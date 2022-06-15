import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { Container, Label } from './styles';

export default function Card({ data, cards, setCards}) {

  const [{isDragging}, dragRef] = useDrag({
    type: 'CARD',
    item: { card: data, cards },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
    end(item, monitor) {
      console.log(monitor.getItem())
      if(monitor.didDrop()){
        setCards(cards.filter(card => card !== data))
      }
    }
  })
   
  return (
    <Container ref={dragRef} isDragging={isDragging}>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>
      <p>{data.content}</p>
      { data.user && <img src={data.user} alt=""/> }
    </Container>
  );
}