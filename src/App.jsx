import { useEffect, useState } from "react";
import "./App.css";

const gameIcones = [
  "🙌",
  "👌",
  "😒",
  "💕",
  "😁",
  "😉",
  "😎",
  "😭",
  "😤",
  "🫠",
  "🥸",
  "🤡",
];

function App() {
  const [pieces, setPieces] = useState([]);
  const startGame = () => {
    const dupGameIcons = gameIcones.concat(gameIcones);
    const newGameIcones = [];

    while (newGameIcones.length < gameIcones.length * 2) {
      const randomIndex = Math.floor(Math.random() * dupGameIcons.length);
      newGameIcones.push({
        emoji: dupGameIcons[randomIndex],
        flipped: false,
        solved: false,
        position: gameIcones.length,
      });
      dupGameIcons.splice(randomIndex, 1);
    }
    setPieces(newGameIcones);
  };

  useEffect(() => {
    startGame();
  }, []);
  const handleAvtive = (data) => {
    const newPieces = pieces.map((piece) => {
      if (piece.position == data.position) {
        piece.flipped = !piece.flipped;
      }
      return piece;
    });
    setPieces(newPieces);
  };
  console.log(pieces);
  return (
    <main>
      <h1>Memmery Game in React</h1>
      <div className="container">
        {pieces.map((data, index) => (
          <div
            className={`flip-card ${data.flipped ? "active" : ""}`}
            key={index}
            onClick={() => handleAvtive(data)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front" />
              <div className="flip-card-back">{data.emoji}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
