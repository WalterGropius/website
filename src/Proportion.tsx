import React, { useState, useEffect } from 'react';

type GameState = 'intro' | 'playing' | 'results';

const Proportion: React.FC = () => {
    const [guess, setGuess] = useState<string>('');
    const [score, setScore] = useState<number>(0);
    const [tries, setTries] = useState<number>(10);
    const [feedback, setFeedback] = useState<string>('');
    const [aspectRatio, setAspectRatio] = useState<number>(Math.random() * 2 + 1);
    const [rectDimensions, setRectDimensions] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
    const [gameState, setGameState] = useState<GameState>('intro');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGuess(e.target.value);
    }

    const handleSubmit = () => {
        const [numerator, denominator] = guess.split(',').map(num => parseFloat(num)).sort((a, b) => b - a);
        setGuess(''); // Clear the input

        if (isNaN(numerator) || isNaN(denominator)) {
            setFeedback("Invalid input");
            return;
        }

        const userGuess = numerator / denominator;
        if (userGuess >= 0.8 * aspectRatio && userGuess <= 1.2 * aspectRatio) {
            setScore(prev => prev + 1);
            setFeedback("In the ballpark");
        }

        if (userGuess >= 0.9 * aspectRatio && userGuess <= 1.1 * aspectRatio) {
            setScore(prev => prev + 2);
            setFeedback("Spot on!");
        } else {
            setScore(prev => prev - 3);
            setFeedback(`Bad! Ideal would be: ${aspectRatio.toFixed(1)}`);
        }

        setTries(prev => prev - 1);
        if (tries - 1 <= 0) {
            setGameState('results');
        } else {
            setAspectRatio(Math.random() * 2 + 1);
        }
    }

    useEffect(() => {
        const maxDimension = window.innerWidth * 2/3;
        const rectWidth = Math.min(Math.random() * (window.innerWidth - 200) + 100, maxDimension);
        const rectHeight = rectWidth / aspectRatio;
    
        if (rectHeight > window.innerHeight - 200) {
            const newHeight = Math.min(Math.random() * (window.innerHeight - 200) + 100, maxDimension);
            setRectDimensions({ width: newHeight * aspectRatio, height: newHeight });
        } else {
            setRectDimensions({ width: rectWidth, height: rectHeight });
        }
    
    }, [aspectRatio]);
    

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            {gameState === 'intro' && (
                <>
                    <h1>Welcome to the Proportion Game!</h1>
                    <p>Guess the aspect ratio of the rectangle. Input your guess in the format "width,height".</p>
                    <button onClick={() => setGameState('playing')}>Start</button>
                </>
            )}

            {gameState === 'playing' && (
                <>
                    <div style={{ 
                        width: rectDimensions.width, 
                        height: rectDimensions.height, 
                        background: 'white', 
                        margin: '20px' 
                    }}></div>
                    <input
                        value={guess}
                        onChange={handleInputChange}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                        placeholder="width,height"
                    />
                    <p>{feedback}</p>
                    <p>Score: {score}</p>
                    <p>Tries left: {tries}</p>
                </>
            )}

            {gameState === 'results' && (
                <>
                    <h1>Game Over!</h1>
                    <p>Your final score is: {score}</p>
                    <button onClick={() => {
                        setScore(0);
                        setTries(10);
                        setFeedback('');
                        setGameState('intro');
                    }}>Restart</button>
                </>
            )}
        </div>
    );
}

export default Proportion;
