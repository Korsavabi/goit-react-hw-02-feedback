import React from 'react';
import PropTypes from "prop-types";
import classes from './FeedBack.module.css';

const FeedBack = ({badNun, goodNun, neutralNun}) => {
    return (
        <div className={classes.Container}>
            <button onClick={goodNun}>Good</button>
            <button onClick={neutralNun}>Neutral</button>
            <button onClick={badNun}>Bad</button>
        </div>
    );
};

export default FeedBack;

FeedBack.propTypes = {
    goodNun: PropTypes.func.isRequired,
    neutralNun: PropTypes.func.isRequired,
    badNun: PropTypes.func.isRequired,
}