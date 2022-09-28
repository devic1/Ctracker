import React, { useState } from "react";

var data = [];
function Home() {
  const [loc, setloc] = useState([13, 17]);
  function Tracker() {
    setloc([loc[0] + 1, loc[1] + 1]);
    data.push([loc[0], loc[1]]);
  }
  function Stop() {
    console.log(data);
  }
  function Download() {
    console.log(data);
    var data_string = JSON.stringify(data);
    var file = new Blob([data_string], {
      type: "text",
    });
    var anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(file);
    anchor.download = "save.txt";
    anchor.click();
    alert("Downloaded Successfully ");
  }
  return (
    <div>
      <div className="Heading">Route Tracking Website - Devic 🖤</div>
      <div className="coord">
        <div>Latitude --- {loc[0]}</div>
        <br></br>
        <div>Longitude --- {loc[1]}</div>
        <br></br>
      </div>
      <div className="align">
        <button className="btn " onClick={() => Tracker()}>
          Start
        </button>
        <button className="btn " onClick={() => Stop()}>
          Stop
        </button>
        <button className="btn " onClick={() => Download()}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Home;
