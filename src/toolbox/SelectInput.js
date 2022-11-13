import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React from "react";

const SelectInput = ({
  name,
  label,
  onchange,
  defaultOption,
  valeu,
  error,
  options
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        value={valeu}
        onChange={onchange}
        className="form-control"
      >
        <option value="">
{defaultOption}
            </option>
            {options.map(option=>{
                return(
                    <option key={option.valeu} value={option.valeu}>
                        {option.text}
                    </option>
                )
            })}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};


export default SelectInput;