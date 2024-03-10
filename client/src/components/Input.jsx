import "../styles/input.css";
import axios from "axios";

const Input = () => {
  const detectUrlDomain = (url) => {
    if (url.includes("facebook.com") || url.includes('instagram.com')) {
      return "fc";
    // } else if (url.includes("instagram.com")) {
    //   return "ig";
    } else if (url.includes("youtube.com") || url.includes("youtu.be")) {
      return "yt";
    } else if (url.includes("twitter.com") || url.includes("x.com")) {
      return "x";
    } else if (url.includes("tiktok.com")) {
      return "tt";
    } else {
      throw new Error("URL no soportada");
    }
  };

  const startDownload = async (data) => {
    const domain = detectUrlDomain(data.url);
    const endpoint = `http://localhost:3000/download/${domain}`;
    const res = await axios.post(endpoint, data);
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
