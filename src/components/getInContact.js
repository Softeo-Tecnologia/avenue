import React from "react"
import Form from "./form";
import "./styles/getInContact.css";

function getInContact(props) {
  return (
    <>
      <section className={props.portfolio ? "containerGetInTouchPort": "containerGetInTouch"}>
        <div className="row">
          <div className="col-12 col-sm-2 divIcon">
            <img src="/assets/img/contact/Vector2.svg" alt="logo" className="logo"/>
          </div>
          <div className="col-12 col-sm-10 col-xl-10 col-lg-10 col-md-10 getInContactSomewhereText">
            <img className="sunsetImg" src="/assets/img/contact/Sunset.svg" alt="sunset" />
            <h1 className="only">It’s only fivepm…</h1>
            <h1 className="getToWork">let’s get to work</h1>
          </div>

          {<Form />}
        </div>
      </section>

      {/* <div data-paperform-id="fivepm"></div> */}

    </>
  )
}

export default getInContact;

