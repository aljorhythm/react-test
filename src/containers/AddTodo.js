import React from 'react';
import { connect } from 'react-redux';
import { Form, Row, Col, InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input
  return (
    <Row style={{ marginTop: 20 }}>
      <Col>
        <Form onSubmit={e => {
          e.preventDefault()
          console.log(input)
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
          <InputGroup>
            <Input onChange={(e) => {input = e.target}} />
            <InputGroupAddon addonType="append">
              <Button type="submit">
                Add Todo
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </Col>
    </Row>
  )
}

export default connect()(AddTodo)
