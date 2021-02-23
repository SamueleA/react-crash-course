import MyProfile from './components/MyProfile';
import UserAvatar from './components/UserAvatar';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyProfile
        name="codeclimbing"
        description="the best youtube ever"
        age={20}
        UserAvatar={UserAvatar}
        height={6}
      />
      <MyProfile
        name="Samuele"
        description="A cool guy"
        age={30}
        UserAvatar={UserAvatar}
        height={6}
      />
      <MyProfile
        name="john"
        description="Another cool guy!"
        age={40}
        UserAvatar={UserAvatar}
      />
    </div>
  );
}

export default App;
