import React from "react";
import { connect } from "react-redux";
import { eat, nap, play } from "../redux/actions/activity";

const Activity = ({ activity, name, eat, nap, play }) => {
  return (
    <div>
      <h2>
        {name.name} is: {activity.activity}
      </h2>
      <button onClick={() => eat()}>Eating</button>
      <button onClick={() => play()}>Playing</button>
      <button onClick={() => nap()}>Napping</button>
    </div>
  );
};

//this is a subscriber, it listens to changes in state
const mapStateToProps = state => ({
  activity: state.activity,
  name: state.name
});

//this is a dispatcher, it dispatches actions to redux
const mapDispatchToProps = dispatch => {
  return {
    eat: () => dispatch(eat()),
    play: () => dispatch(play()),
    nap: () => dispatch(nap())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity);
