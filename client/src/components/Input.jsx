import '../styles/input.css'
import axios from 'axios'
import Loader from './Loader'
import { useState } from 'react'

const Input = () => {
  const [loader, setLoader] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    {
      
    }
    const inputData = Object.fromEntries(formData)
    const endpoint = `http://localhost:3000/download`
    try {
      setLoader(true)  
      const { data } = await axios.get(endpoint, {
        params: inputData,
        responseType: 'arraybuffer',
      })
      const videoBlob = new Blob([data], { type: 'video/mp4' })
      const url = window.URL.createObjectURL(videoBlob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'video.mp4'
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error(error)
    } finally {
      setLoader(false)
      e.target.reset()
      // e.url.focus()
    }
  }
  return (
    <form onSubmit={handleSubmit} className='form'>
  
      <button className={`form__button${loader ? ' active': ''}`}>GET</button>
      {loader ? <Loader />: 
      <input
        className='form__input'
        autoComplete='off'
        name='url'
        type='text'
        placeholder='https://www.example.com/watch/p/=687AS98F4A'
      />}
    </form>
  )
}

export default Input
