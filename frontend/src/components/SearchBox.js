import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')
  // Hover state track karne ke liye
  const [isHovered, setIsHovered] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      
      {/* Inline styling se direct color aur hover control kiya gaya hai */}
      <Button 
        type='submit' 
        className='p-2'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundColor: isHovered ? '#ffffff' : 'transparent',
          color: isHovered ? '#004aad' : '#ffffff',
          borderColor: '#ffffff',
          boxShadow: 'none'
        }}
      >
        Search
      </Button>
    </Form>
  )
}

export default SearchBox