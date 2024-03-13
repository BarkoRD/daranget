const ParticlesBg = () => {
  return (
    <svg
      style={{
        // display: "none",
        zIndex: -1,
        position: 'absolute',
        minWidth: '100vw',
        minHeight: '100vh',
      }}
      width='100%'
      height='100%'
      viewBox='0 0 800 600'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='none'
    >
      <defs>
        <radialGradient id='gradient' cx='50%' cy='-8%' r='100%'>
          <stop offset='75%' stop-color='rgba(0,0,0,0)' />
          <stop offset='100%' stop-color='#e31b4d78' />
        </radialGradient>
      </defs>
      <rect width='100%' height='100%' fill='url(#gradient)' />
    </svg>
  )
}

export default ParticlesBg

/* <svg
      style={{
        // display: "none",
        zIndex: 1,
        position: "absolute",
        minWidth: "100vw",
        minHeight: "100vh",
      }}
      width="100%"
      height="100%"
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <radialGradient id="gradient" cx="50%" cy="-5%" r="100%">
          <stop offset="75%" stop-color="rgba(0,0,0,0)" />
          <stop offset="100%" stop-color="#e31b4dbd" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#gradient)" />
    </svg>
  */

// <svg
//     style={{
//       // display: "none",
//       zIndex: -10,
//       position: "absolute",
//       minWidth: "100vw",
//       minHeight: "100vh",
//     }}
//     width="100%"
//     height="100%"
//     viewBox="0 0 800 600"
//     xmlns="http://www.w3.org/2000/svg"
//     preserveAspectRatio="none"
//   >
//     <defs>
//       <radialGradient
//         id="gradient"
//         cx="50%"
//         cy="10%"
//         r="120%"
//         fx="50%"
//         fy="10%"
//       >
//         <stop offset="55%" stop-color="#000" />
//         <stop offset="100%" stop-color="#e31b4d" />
//       </radialGradient>
//     </defs>
//     <rect width="100%" height="100%" fill="url(#gradient)" />
//   </svg>
