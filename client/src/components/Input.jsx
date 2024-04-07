import '../styles/input.css'
import Loader from './Loader'
import ButtonBlock from './Buttonblock'
import { useState } from 'react'
import { downloadFile } from './functions'

const Input = () => {
  const [loader, setLoader] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState('');
  const [lowSpeed, setLowSpeed] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    await downloadFile(selectedFormat, { setLoader, setLowSpeed});
    e.target.reset();
  };

  const handleFormatSelect = (format) => {
    setSelectedFormat(format);
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <ButtonBlock onSelect={handleFormatSelect} />
      {loader ? <Loader lowSpeed={lowSpeed}/> :
        <input
          className='form__input'
          autoComplete='off'
          name='url'
          type='text'
          placeholder='https://www.example.com/watch/p/=687AS98F4A'
        />}
      <input type="hidden" name="format" value={selectedFormat} />
    </form>
  );
};


export default Input
