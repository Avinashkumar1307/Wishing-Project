import React, { useState } from "react";
import html2canvas from "html2canvas";

const Layout = () => {
  const [mainImageUrl, setMainImageUrl] = useState(
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
  );
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [text, setText] = useState("");
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0, text: "" });

  const handleTemplateClick = (url) => {
    setMainImageUrl(url);
  };

  const handleCustomTemplate = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMainImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePreview = () => {
    setTextPosition({ x, y, text });
  };

  const handleDownload = () => {
    const mainBox = document.querySelector(".main-box");
    html2canvas(mainBox).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "image_with_text.png";
      link.click();
    });
  };

  return (
    <div className="w-full h-screen flex justify-center">
    <div className="container ">
      <div className="main-box" style={{ position: "relative" }}>
        <img src={mainImageUrl} alt="Main" />
        <div 
          style={{
            position: "absolute",
            left: `${textPosition.x}px`,
            top: `${textPosition.y}px`,
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "2px 5px",
          }}

        >
          {textPosition.text}
        </div>
      </div>
      <div className="sidebar">
        <div className="section">
          <h2>Templates</h2>
          <div className="w-[500px] flex justify-between">
            <div
              className=" w-[100px] h-[100px]"
              onClick={() =>
                handleTemplateClick(
                  "https://img.lovepik.com/photo/48015/7093.jpg_wh860.jpg"
                )
              }
            >
              <img
                src="https://img.lovepik.com/photo/48015/7093.jpg_wh860.jpg"
                alt="Template 1"
                 className=" w-[100px] h-[100px]"
              />
            </div>
            <div
              className=" w-[100px] h-[100px]"
              onClick={() =>
                handleTemplateClick(
                  "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
                )
              }
            >
              <img
                src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
                alt="Template 2"
                 className=" w-[100px] h-[100px]"
              />
            </div>
            <div
              className=" w-[200px] h-[200px]"
              onClick={() =>
                handleTemplateClick(
                  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                )
              }
            >
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                alt="Template 3"
                 className=" w-[100px] h-[100px]"
              />
            </div>
          </div>
          <div>
            <button
              className="custom-button"
              onClick={() => document.getElementById("fileInput").click()}
            >
              Apply Custom Template
            </button>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleCustomTemplate}
            />
          </div>
        </div>
        <div className="section">
          <h2>Positions</h2>
          <div className="position">
            <input
              type="number"
              style={{ marginRight: "1rem" }}
              placeholder="X-axis"
              onChange={(e) => setX(e.target.value)}
            />
            <input
              type="number"
              placeholder="Y-axis"
              onChange={(e) => setY(e.target.value)}
            />
          </div>
          <div className="position">
            <input
              type="text"
              placeholder="Text"
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="custom-button"
              style={{ marginLeft: "1.5rem" }}
              onClick={handlePreview}
            >
              Preview
            </button>
          </div>
          <div className="custom-button" onClick={handleDownload}>
            Download
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Layout;
