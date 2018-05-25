import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import moment from "moment";
import DateTime from "react-datetime";

const DateTimeField = ({
  disabled,
  input,
  label,
  placeholder,
  dateFormat,
  timeFormat,
  meta: { valid, touched, error },
  ...props
}) => {
  const classes = classNames("form-group", {
    "has-error": touched && !valid,
    "has-success": touched && valid
  });
  console.log(input.value);

  return (
    <div className={classes}>
      {label && <label htmlFor={input.name}>{label}</label>}
      <DateTime
        name={input.name}
        // value={input.value}
        locale="en"
        dateFormat={dateFormat !== false ? "MM/DD/YYYY" : false}
        timeFormat={timeFormat !== false ? "hh:mm A" : false}
        onChange={param => {
          console.log(param);
          input.onChange(param);
        }}
        disabled={disabled}
      />
      {!valid && touched && <p className="help-block">{error}</p>}
    </div>
  );
};

DateTimeField.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  dateFormat: PropTypes.bool,
  timeFormat: PropTypes.bool
};
export default DateTimeField;
