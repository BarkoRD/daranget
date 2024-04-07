const Loader = ({ lowSpeed }) => {
  return (
    <div className='form__loader'>
      <div className={`form__loader-bar ${lowSpeed ? 'speedmp3' : 'speedmp4'}`}></div>
    </div>
  )
}

export default Loader