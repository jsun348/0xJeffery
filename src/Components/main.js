import '../App.css';
import ProfileHeader from "./ProfileHeader"
import Profile from './Profile';

const MainPage = () => {
  return (
    <div className="App">
      <ProfileHeader />
      <Profile />
    </div>
  );
}

export default MainPage;
