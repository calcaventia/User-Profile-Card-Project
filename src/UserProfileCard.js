import profile from "./profile.jpeg";

function UserProfileCard() {
  return (
    <div className="user-profile-card">
      <img src={profile} alt="Profile" />
      <h2>Tintswalo Mabuza</h2>
      <h4>Full Stack Software Engineer | Javascript</h4>
      <div className="row" id="content-container">
        <div className="col-4">
          <p id="no-followers">558</p>
        </div>
        <div className="col-4">
          <p id="no-following">162</p>
        </div>
        <div className="col-4">
          <p id="no-posts">17</p>
        </div>
      </div>
      <div className="row" id="engagement-text">
        <div className="col-4" id="follower-label">
          Followers
        </div>
        <div className="col-4" id="following-label">
          Following
        </div>
        <div className="col-4" id="posts-label">
          Posts
        </div>
      </div>
      <div className="bio-container">
        <div className="bio-text">
          <p id="bio">
            Software development lifecycle experience. Skilled in HTML, CSS,
            Bootstrap, JavaScript, React, GIT and API.
          </p>
        </div>
        <div className="button-container">
          <button>Follow</button>
          <button>View Profile</button>
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;
