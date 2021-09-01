import { connect } from "react-redux";
import About from "../components/About.js";

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};

export default connect(mapStateToProps)(About);