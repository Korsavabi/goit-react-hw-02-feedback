import React, { Component } from 'react';
import FeedBack from './FeedBack/FeedBack';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import PropTypes from "prop-types";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  goodNun = async () => {
    await this.setState((prevState) => ({
      good: prevState.good + 1
    }))
  }
  neutralNun = async () => {
    await this.setState((prevState) => ({
      neutral: prevState.neutral + 1
    }))
  }
  badNun = async () => {
    await this.setState((prevState) => ({
      bad: prevState.bad + 1
    }))
  }
  countTotalFeedback() {
    const sum = Object.values(this.state).reduce((acc, value) => acc + value, 0)
    return sum
  }
  countPositiveFeedbackPercentage() {
    const positive = Math.round((this.state.good / (this.state.neutral + this.state.bad + this.state.good)) * 100);
    return positive
  }
  render() {
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedBack goodNun={this.goodNun} neutralNun={this.neutralNun} badNun={this.badNun} />
        </Section>
        <Section title={"Statistics"}>
          {this.countTotalFeedback() > 0 ? 
             (<Statistics good={this.state.good} neutral={this.state.neutral} 
             bad={this.state.bad} total={this.countTotalFeedback()} positive={this.countPositiveFeedbackPercentage()} />) : (<Notification message="No feedback given" />)}
          

          
        </Section>
      </>
    );
  }
}

export default App;

FeedBack.PropTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
  goodNun: PropTypes.func.isRequired,
  neutralNun: PropTypes.func.isRequired,
  badNun: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
  title: PropTypes.string,
}

