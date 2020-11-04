import React from 'react';
import classes from '../FeedBack/FeedBack.module.css';
import PropTypes from "prop-types";


const Statistics = ({ positive, bad, good, neutral, total}) => {
    return (
        <ul className={classes.Count}>
        <li><p className={classes.text}>Good: {good}</p></li>
        <li><p className={classes.text}>Neutral: {neutral}</p></li>
        <li><p className={classes.text}>Bad: {bad}</p></li>
        <li><p className={classes.text}>Total: {total}</p></li>
        <li><p className={classes.text}>Positive feedback: {positive?  positive : '0'}%</p></li>
    </ul>
    );
};

export default Statistics;
Statistics.propTypes = {
    positive: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
}