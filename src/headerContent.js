import logo from "./logo.svg";
import "./App.css";

function HeaderContent() {
  return (
    <div style={{ width: "100%", minHeight: "100%" }}>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          minHeight: "34px",
          backgroundColor: "red",
          right: "0px",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          left: "0px",
          top: "34px",
          bottom: "0px",
          right: "0px",
          zIndex: 103,
          // padding: 5,
          backgroundColor: "orange",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            padding: "0px",
            float: "left",
            margin: "0px",
            position: "relative",
            zIndex: 1,
            overflow: "auto",
          }}
        >
          <h1>fdds</h1>
          <h1>fds</h1>
          <h1>fds</h1>
          <h1>fds</h1>
          <h1>fds</h1>
          <h1>fdsd</h1>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
