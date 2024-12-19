import React, { useState, useEffect } from 'react';

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 5, y: 5 }]);
  const [direction, setDirection] = useState('RIGHT');
  const [food, setFood] = useState({ x: 10, y: 10 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [highScore, setHighScore] = useState(0);
  const gridSize = 20;

  const eatAppleSound = new Audio('eat.mp3');
  const gameOverSound = new Audio('gameover.mp3');

  useEffect(() => {
    const savedHighScore = localStorage.getItem('highScore');
    if (savedHighScore) {
      setHighScore(Number(savedHighScore));
    }
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameOver) {
        if (e.key === 'Enter') {
          restartGame(); // Tombol Enter untuk memulai ulang game
        }
        return;
      }

      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
        case 'Enter':
          if (gameOver) restartGame(); // Memulai ulang game dengan Enter
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [direction, gameOver]);

  useEffect(() => {
    if (gameOver) return;

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const head = { ...prevSnake[0] };

        switch (direction) {
          case 'UP':
            head.y -= 1;
            break;
          case 'DOWN':
            head.y += 1;
            break;
          case 'LEFT':
            head.x -= 1;
            break;
          case 'RIGHT':
            head.x += 1;
            break;
          default:
            break;
        }

        const newSnake = [head, ...prevSnake.slice(0, prevSnake.length - 1)];

        // Cek tabrakan dengan dinding atau tubuh ular
        if (
          head.x < 0 ||
          head.x >= gridSize ||
          head.y < 0 ||
          head.y >= gridSize ||
          prevSnake.some((segment) => segment.x === head.x && segment.y === head.y)
        ) {
          gameOverSound.play(); // Mainkan suara game over
          if (score > highScore) {
            setHighScore(score);
            localStorage.setItem('highScore', score);
          }
          setGameOver(true);
          return prevSnake;
        }

        // Cek jika ular makan makanan
        if (head.x === food.x && head.y === food.y) {
          setScore(score + 1);
          setFood({ x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize) });
          eatAppleSound.play(); // Mainkan suara makan apel
          return [head, ...prevSnake]; // Menambah panjang ular
        }

        return newSnake;
      });
    };

    const gameInterval = setInterval(() => {
      moveSnake();
    }, 100);

    return () => {
      clearInterval(gameInterval);
    };
  }, [direction, food, score, gameOver]);

  const restartGame = () => {
    setSnake([{ x: 5, y: 5 }]);
    setDirection('RIGHT');
    setFood({ x: 10, y: 10 });
    setScore(0);
    setGameOver(false);
  };

  const handleGridClick = () => {
    if (gameOver) {
      restartGame(); // Klik grid untuk memulai ulang game
    }
  };

  // Menangani perubahan arah pada perangkat mobile
  const handleDirectionChange = (newDirection) => {
    if (gameOver) return; // Jangan ubah arah jika game sudah selesai
    switch (newDirection) {
      case 'UP':
        if (direction !== 'DOWN') setDirection('UP');
        break;
      case 'DOWN':
        if (direction !== 'UP') setDirection('DOWN');
        break;
      case 'LEFT':
        if (direction !== 'RIGHT') setDirection('LEFT');
        break;
      case 'RIGHT':
        if (direction !== 'LEFT') setDirection('RIGHT');
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white"
      style={{
        backgroundImage: "url('/path/to/your-background.gif')", // Gantilah dengan path ke file GIF
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <h1 className="text-4xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        Snake Game
      </h1>

      {/* Skor dan High score */}
      <div className="mb-4 text-xl font-semibold">
        Score: <span className="text-green-400">{score}</span>
      </div>
      <div className="text-lg mb-6 font-medium">
        High Score: <span className="text-yellow-400">{highScore}</span>
      </div>

      {/* Grid permainan */}
      <div 
        className="relative bg-gray-800 rounded-md w-96 h-96 shadow-lg"
        onClick={handleGridClick} // Tambahkan event klik untuk grid
      >
        <div
          className="absolute w-full h-full"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          }}
        >
          {Array.from({ length: gridSize * gridSize }).map((_, index) => {
            const x = index % gridSize;
            const y = Math.floor(index / gridSize);

            const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
            const isFood = food.x === x && food.y === y;

            return (
              <div
                key={index}
                className={`w-full h-full ${isSnake ? 'bg-green-500 rounded-lg shadow-md transition-all' : ''} 
                  ${isFood ? 'bg-red-500 rounded-full transform scale-110 transition-all' : ''}`}
              ></div>
            );
          })}
        </div>

        {/* Instruksi untuk mulai game */}
        {gameOver && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold shadow-lg">
            <p>Click the Grid to Start or Restart the Game</p>
          </div>
        )}
      </div>

      {/* Tombol arah untuk kontrol di perangkat mobile */}
      {!gameOver && (
        <div className="flex mt-6 space-x-6">
          <button
            onClick={() => handleDirectionChange('UP')}
            className="bg-blue-500 p-6 rounded-full text-white text-3xl hover:bg-blue-600 shadow-lg transform transition-all"
          >
            ↑
          </button>
        </div>
      )}
      <div className="flex mt-2 space-x-6">
        <button
          onClick={() => handleDirectionChange('LEFT')}
          className="bg-blue-500 p-6 rounded-full text-white text-3xl hover:bg-blue-600 shadow-lg transform transition-all"
        >
          ←
        </button>
        <button
          onClick={() => handleDirectionChange('RIGHT')}
          className="bg-blue-500 p-6 rounded-full text-white text-3xl hover:bg-blue-600 shadow-lg transform transition-all"
        >
          →
        </button>
      </div>
      <div className="flex mt-2 space-x-6">
        <button
          onClick={() => handleDirectionChange('DOWN')}
          className="bg-blue-500 p-6 rounded-full text-white text-3xl hover:bg-blue-600 shadow-lg transform transition-all"
        >
          ↓
        </button>
      </div>
    </div>
  );
};

export default SnakeGame;
