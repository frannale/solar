import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const Selects = (props) => {

const handleChange = (selectedOption) => {
  console.log(props.default);
  
  props.onChange(selectedOption);
    
}

const animatedComponents = makeAnimated();

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      onChange={handleChange}
      isMulti
      value={props.default}
      options={props.options}
    />
  );
}
export default Selects;