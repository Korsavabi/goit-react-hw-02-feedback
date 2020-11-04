import React from 'react';
import classes from '../FeedBack/FeedBack.module.css';
import PropTypes from "prop-types";


const Section = ({ title, children }) => {
    return (
        <div className={classes.Container}>
            <h1>{title}</h1>
            {children}
        </div>
    );
};

export default Section;

Section.propTypes = {
 
    title: PropTypes.string.isRequired,
}