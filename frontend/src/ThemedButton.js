import React from "react";
import PropTypes from "prop-types";

function ThemedButton({ theme, label, ...restProps }) {
    return (
        <button className={`btn btn-${theme}`} {...restProps}>
            {label}
        </button>
    );
}

ThemedButton.defaultProps = {
    theme: "default",
};

ThemedButton.propTypes = {
    theme: PropTypes.string,
    label: PropTypes.string.isRequired,
}


export default ThemedButton;
