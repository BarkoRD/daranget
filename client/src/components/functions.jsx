import axios from 'axios'

//version funcional tarda mucho no funciona online
// export const downloadFile = async (format, { setLoader, setLowSpeed }) => {
//   const endpoint = format === 'mp4' ? `http://localhost:3000/download` : `http://localhost:3000/downloadmp3`;
//   const fileType = format === 'mp4' ? 'video/mp4' : 'audio/mp4';
//   const defaultName = 'DaranGET' + idgenerator();
//   format === 'mp3' ? setLowSpeed(true) : setLowSpeed(false);

//   setLoader(true);
//   try {
//     const { data, headers } = await axios.get(endpoint, {
//       params: { url: document.querySelector('input[name="url"]').value, format },
//       responseType: 'arraybuffer',
//     });

//     let fileName = decodeURIComponent(headers['x-filename']);

//     if (fileName === 'cancel') {
//       alert('Actualmente esta funcion solo esta disponible con links de Youtube :(')
//     } else {
//       fileName = fileName === 'undefined' ? defaultName : fileName;

//       const blob = new Blob([data], { type: fileType });
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = fileName;
//       a.click();
//       window.URL.revokeObjectURL(url);
//     }
//   } catch (error) {
//     console.error(error);
//     alert('Ocurrió un error al intentar descargar el archivo. Por favor, inténtalo de nuevo.');
//   } finally {
//     setLoader(false);
//   }
// };



//version funcional enviando al playback

export const downloadFile = async (format, { setLoader, setLowSpeed }) => {
  console.log(format)
  const endpoint = format === 'mp4' ? `https://api.daranhub.com/download` : `https://api.daranhub.com/downloadmp3`;
  const fileType = format === 'mp4' ? 'video/mp4' : 'audio/webm';
  const defaultName = 'DaranGET' + idgenerator();
  format === 'mp3' ? setLowSpeed(true) : setLowSpeed(false);

  setLoader(true);
  try {
    if (format === 'mp4') {
      const { data, headers } = await axios.get(endpoint, {
        params: { url: document.querySelector('input[name="url"]').value, format },
        responseType: 'arraybuffer',
      });

      let fileName = decodeURIComponent(headers['x-filename']);
      fileName = fileName === 'undefined' ? defaultName : fileName;

      const blob = new Blob([data], { type: fileType });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName + '.mp4';
      a.click();
      window.URL.revokeObjectURL(url);


    } else if (format === 'mp3') {

      const response = await axios.get(endpoint, {
        params: { url: document.querySelector('input[name="url"]').value },
      });

      const { url, filename } = response.data;
      const finalName = filename === 'undefined' ? defaultName : decodeURIComponent(filename);
      console.log(filename)
      if (filename === 'cancel') {
        alert('actualmente el getmp3 solo esta disponible para links de youtube')
      } else {
        const a = document.createElement('a');
        a.href = url;
        a.download = finalName;
        a.target = '_blank'
        a.click();
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoader(false);
  }
};

export const idgenerator = () => {
  const randomNumber = Math.floor(Math.random() * 99) + 1;
  return randomNumber.toString().padStart(2, '0');
}