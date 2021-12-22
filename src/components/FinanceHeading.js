import React from "react";
import PropTypes from 'prop-types';

const FinanceHeading = ({ Symbol }) => (
    <div className="finance-heading-container">
        <div className="finance-heading">
            {Symbol}
            {' '}
            -
            {' '}
            Financial Indicators
        </div>
    </div>
);

FinanceHeading.PropTypes = {
    symbol: PropTypes.string.isRequired,
};

export default FinanceHeading;