import PropTypes from 'prop-types';

import EditableString from '../EditableString';

const MyProfile = ({
  name,
  description,
  age,
  UserAvatar,
  height,
}) => {

  return (
    <div className="my-class">
      <UserAvatar name={name} />
      <h1>MyProfile</h1>
      <div>{'Name: '}
        <EditableString
          initialValue={name}
        />
      </div>
      <p>Description: {description}!</p>
      <p>Age: {age}</p>
      <p>Height: {height}</p>
    </div>
  );
};

MyProfile.defaultProps = {
  height: 'no height',
};

MyProfile.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  UserAvatar: PropTypes.element.isRequired,
  height: PropTypes.number,
};

export default MyProfile;
