import { useState, useEffect } from "react";

function App() {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((data) => setImgSrc(data.message));
  }, []);
  if (!imgSrc) return <p>Loading...</p>;

  return (
    <div>
      <img src={imgSrc} alt="A Random Dog" />
    </div>
  );
}

export default App;
