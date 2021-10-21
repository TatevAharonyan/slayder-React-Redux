import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import './App.css';
import Images from "./Images";
import RadioInput from './RadioInput';
import { setChoose } from "./action/action"




function App({ imgArr, imagNamber, setChoose }) {

  let margin = (imagNamber * 100);

  return (
    <div className="App">
      <div className="header">
        {/* title slayder */}
        <h1 className="title"> New seven wonders of the world </h1>
      </div>

      {/* img & radiobutton */}
      <div className="slider">
        <RadioInput
          setChoose={(value) => setChoose(value)}
          imgArr={imgArr}
          imagNamber={imagNamber}
        />

        <Images
          imgArr={imgArr}
          margin={margin}
        />

      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    imagNamber: state.imagNamber,
    imgArr: state.imgArr,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setChoose
  },
    dispatch
  )
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
