import React, { Component } from "react";
import Statistics from '../Statistics/Statistics'
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
import Section from '../Section/Section'
import Notification from '../Notification/Notification'


class Feedback extends Component {
    static defaultProps = {};
  
    static propTypes = {};
  
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
   
   }
  
   feedbackFunction = (e)=> {
    const value = e.currentTarget.textContent.toLowerCase()
    
    switch(value) {
      case "good": 
      this.setState((update)=> {
      
   
        return {
          
          good: update.good +1
          
        } 
      });
      break;
      
      case "neutral": 
      this.setState((update)=> {
      
   
        return {
          
          neutral: update.neutral +1
          
        } 
      });
      break;
  
      case "bad": 
      this.setState((update)=> {
      
   
        return {
          
          bad: update.bad +1
          
        } 
      });
      break;
      default:
        console.log("Error")
  
    }
  
    
   }
  
   
   countTotalFeedback = ()=> {
    const result = this.state.bad + this.state.good + this.state.neutral;
    return result;
  
    
   }
  
   countPositiveFeedbackPercentage = (total) => {
    const result = (this.state.good/total)*100;
   
    
    return Math.round(result);
   }
  
  
    render() {
    
      return <>
        <Section title="Please leave feedback">
        <FeedbackOptions options={this.state} onLeaveFeedback={this.feedbackFunction}/>
  
        </Section>
         {this.countTotalFeedback() === 0 ? (      <Notification message="There is no feedback"></Notification>
  ) : ( <Section title="Statistics" good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage(this.countTotalFeedback())}>
  <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage(this.countTotalFeedback())}/>
  
  </Section>)}
       
      </>
    }
  }

  export default Feedback;