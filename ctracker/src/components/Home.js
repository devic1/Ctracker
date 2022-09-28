import React, { useState } from "react";

var data = [];
function Home() {
  const [loc, setloc] = useState([null, null]);
  const [dc, setdc] = useState(null);
  var id;
  function Tracker() {
    function success(pos) {
      let crd = pos.coords;
      if (data[-1] !== [crd.latitude, crd.longitude]) {
        setdc(data.length);
        setloc([crd.latitude, crd.longitude]);
        data.push([crd.latitude, crd.longitude]);
      }
    }
    function errorc(err) {
      console.log(err);
      navigator.geolocation.clearWatch(id);
      Tracker();
    }
    id = navigator.geolocation.watchPosition(success, errorc);
  }
  function Stop() {
    console.log(data);
    navigator.geolocation.clearWatch(id);
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
        <div>Data Counted --- {dc}</div>
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
