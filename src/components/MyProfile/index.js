import PropTypes from 'prop-types';

const MyProfile = ({
  name,
  description,
  age,
  onClick,
  UserAvatar,
  height,
}) => {

  return (
    <div className="my-class" onClick={onClick}>
      <UserAvatar name={name} />
      <h1>MyProfile</h1>
      <p>Name: {name}</p>
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
  onClick: PropTypes.func.isRequired,
  UserAvatar: PropTypes.element.isRequired,
  height: PropTypes.number,
};

export default MyProfile;
