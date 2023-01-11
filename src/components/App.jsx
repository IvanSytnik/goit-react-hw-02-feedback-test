import React, { Component } from "react";

class Feedback extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
  good: 0,
  neutral: 0,
  bad: 0,
 
 }

 feedbackGood = ()=> {
  this.setState((update)=> {
    return {
      good: update.good +1
    } 
  });
 }

 feedbackNeutral = ()=> {
  this.setState((update)=> {
    return {
      neutral: update.neutral +1
    } 
  });
 }

 feedbackBad = ()=> {
  this.setState((update)=> {
    return {
      bad: update.bad +1
    } 
  });
 }
 
 
 countTotalFeedback = ()=> {
  const result = this.state.bad + this.state.good + this.state.neutral;
  return result;

  
 }

 countPositiveFeedbackPercentage = (total) => {
  const result = (this.state.good/total)*100;
  console.log(total);
  console.log(this.state.good);
  return result;
 }


  render() {
    return <div>
      <h1>Please leave feedback</h1>
      <button type="button" onClick={this.feedbackGood}>Good</button>
      <button type="button" onClick={this.feedbackNeutral}>Neutral</button>
      <button type="button" onClick={this.feedbackBad}>Bad</button>
      <h2>Statistics</h2>  
      <span>Good: {this.state.good}</span>
      <span>Neutral: {this.state.neutral}</span>
      <span>Bad: {this.state.bad}</span>
      <span>Total:{this.countTotalFeedback()}</span>
      <span>Positive feedback: {this.countPositiveFeedbackPercentage(this.countTotalFeedback())} %</span>
    </div>;
  }
}




export const App = () => {
  return (
    <Feedback></Feedback>
  );
};
