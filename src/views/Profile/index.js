import {
  useParams,
} from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();

  return (
    <div>
      My profile id is: {id}
    </div>
  );
};

export default Profile;
