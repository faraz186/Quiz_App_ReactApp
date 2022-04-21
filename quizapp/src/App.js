import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'HTML stands for?',
			answerOptions: [
				{ answerText: 'Hyper text styling Language', isCorrect: false },
				{ answerText: 'Hyper text scripting Language', isCorrect: false },
				{ answerText: 'Hyper text markup Language', isCorrect: true },
				{ answerText: 'Hyper text programming Language', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'What is a state in React?',
			answerOptions: [
				{ answerText: 'A permanent storage.', isCorrect: false },
				{ answerText: 'External storage of the component.', isCorrect: false },
				{ answerText: 'Internal storage of the component.', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'The correct sequence of HTML tags for starting a webpage is?',
			answerOptions: [
				{ answerText: 'Head, Title, HTML, body', isCorrect: false },
				{ answerText: 'HTML, Body, Title, Head', isCorrect: false },
				{ answerText: 'HTML, Title , Head, Body', isCorrect: false },
				{ answerText: 'HTML, Head, Title, Body', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
