import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Button } from 'reactstrap';

const DeleteTodoButton = ({onClick}) => (
  <Button onClick={onClick}>X</Button>
);

const Todo = ({ onClick, onDeleteClick, completed, text }) => (
  <ListGroupItem
    onClick={onClick}
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}
  >
    <span style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}>
      {text}    
    </span>
    <DeleteTodoButton onClick={onDeleteClick}/>
  </ListGroupItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
