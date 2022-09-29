import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Quiz from "./components/Quiz";
import Leaderboard from "./components/Leaderboard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
