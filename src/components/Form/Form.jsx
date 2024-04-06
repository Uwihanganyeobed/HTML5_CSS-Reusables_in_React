import "./Form.css"; // Assuming you have a separate CSS file for styling
import img1 from "../../components/PXL_20231030_135925530.PORTRAIT.jpg";
import img from "../jon-flobrant-lRSChvh1Mhs-unsplash.jpg";
const Form = () => {
  const openModal = () => {
    document.getElementById("id01").style.display = "block";
  };

  const closeModal = () => {
    document.getElementById("id01").style.display = "none";
  };

  // Close the modal if the user clicks anywhere outside of it
  window.onclick = function (event) {
    const modal = document.getElementById("id01");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  return (
    <div className="all">
      <h2>Modal Login Form</h2>
      <button onClick={openModal} style={{ width: "auto" }}>
        Login
      </button>

      <div id="id01" className="modal">
        <form
          className="modal-content animate"
          action="/action_page.php"
          method="post"
        >
          <div className="imgcontainer">
            <span onClick={closeModal} className="close" title="Close Modal">
              &times;
            </span>
            <img src={img1} alt="Avatar" className="avatar" />
          </div>

          <div className="container">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember" />{" "}
              Remember me
            </label>
          </div>

          <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
            <button type="button" onClick={closeModal} className="cancelbtn">
              Cancel
            </button>
            <span className="psw">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </form>
      </div>
      <div className="Start ratings">
        <h2>Star Rating</h2>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
      </div>
      <div>
        <h3>Hover over the image below:</h3>
        <div>
      <button className="btna">A button for something cool <span className="ribbon">NEW</span></button>
      </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={img1} alt="Avatar"className="imga"/>
            </div>
            <div className="flip-card-back">
              <h1>Uwihanganye Obed</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <img src={img} className="image" />
        <div className="overlay">
          <div className="text">Hello World</div>
        </div>
      </div>
    </div>
  );
};

export default Form;
