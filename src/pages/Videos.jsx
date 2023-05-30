import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Videos() {
  const [text, setText] = useState('')
  const navigate = useNavigate()
  const handleTextChange = (e)=> {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setText('')
    navigate(`/videos/${text}`)
  }

  return (
    <div>
      <h1 className={'text-xl'}>videos</h1>
      <form onSubmit={handleSubmit}>
        <input type='text'
               className={'input input-accent'}
               placeholder={'video Id:'}
               value={text}
               onChange={handleTextChange} />
      </form>
    </div>
  )
}

export default Videos