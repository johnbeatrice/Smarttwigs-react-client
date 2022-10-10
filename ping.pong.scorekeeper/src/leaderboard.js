import { useEffect, useState } from 'react';

function Leaderboard() {

  let [profiles, setProfiles] = useState([]);


  // fetching user profiles
  useEffect(() => {

    fetch("https://SmarttwigsInterview.johnbeatrice.repl.co/users")
    .then(res => res.json())
    .then( (result) => { 
      // console.log(result);
      setProfiles(result);
     })
  }, [] );

  return (
    <div className="Leaderboard">

      <h1>Leaderboard</h1>

      {/* loop to display usernames */}
      <div>
        
      {profiles.map((profile) => {
        return <p>{profile.username}</p>
      })}
      </div>

    </div>
  );
}

export default Leaderboard;