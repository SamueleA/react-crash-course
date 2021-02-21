import { useState } from 'react';
import PropTypes from 'prop-types';

const EditableString = ({
  initialValue,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleButtonClick = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  if (editMode) {
    return (
      <>
        <input onChange={handleInputChange} value={value} />
        <button onClick={handleButtonClick} className="editable-field-button">Save</button>
      </>
    );
  }

  return (
    <>
      <span>{value}</span>
      <button onClick={handleButtonClick} className="editable-field-button">Edit</button>
    </>
  );
};

EditableString.propTypes = {
  initialValue: PropTypes.string.isRequired,
};

export default EditableString;
