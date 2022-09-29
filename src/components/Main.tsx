import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <section>
        <div className="wrapper">
          <h2>Name the Villager</h2>
          <Link to={"/quiz"}>Let's Begin</Link>
          <Link to={"/leaderboard"}>Leaderboard</Link>
        </div>
      </section>
    </main>
  );
};

export default Main;

// Instructions on how to play the game
// option for user to check leaderboard
//
