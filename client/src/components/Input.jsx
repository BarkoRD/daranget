import "../styles/input.css";
import axios from "axios";

const Input = () => {

  const startDownload = async (data) => {
    const endpoint = `http://localhost:3000/download`;

    console.log(data);
    const res = await axios.post(endpoint, data);
    console.log(res);

    const downloadUrl = res.data.url;

    const anchor = document.createElement("a");
    anchor.href = downloadUrl;
    anchor.target = "_blank";
    anchor.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      await startDownload(data);
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }

    e.target.reset();
    e.target.url.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <button className="form__button">GET</button>
      <input
        className="form__input"
        autoComplete="off"
        name="url"
        type="text"
        placeholder="https://www.example.com/watch/p/=687AS98F4A"
      />
    </form>
  );
};

export default Input;
