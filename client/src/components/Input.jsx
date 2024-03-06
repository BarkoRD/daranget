import '../styles/input.css'

const Input = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    console.log(data)
    e.target.reset()
    e.target.url.focus()
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <button className='form__button'>GET</button>
      <input
        className='form__input'
        autoComplete='off'
        name='url'
        type='text'
        placeholder='https://www.example.com/watch?v=R8OONiFEUV8'
      />
    </form>
  )
}

export default Input
