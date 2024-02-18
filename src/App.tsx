import { useState } from 'react';
import styles from './App.module.scss';
import questions from './questions.json';
import { Questions } from './types';
import StatBar from './components/StatBar';
import QuestionComponent from './components/Question';
import Reset from './components/Reset';
import Answer_module from './components/Answer.module.scss';
import Classnames from 'classnames';

function App() {
    const allQuestions = questions as Questions;

    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswer, setIncorrectAnswers] = useState(0);

    const [waitingToAdvance, setWatingToAdvance] = useState(false);

    const onSubmit = (correct: boolean) => {
        if (correct) setCorrectAnswers(correctAnswers + 1);
        else setIncorrectAnswers(incorrectAnswer + 1);

        setWatingToAdvance(true);
    };

    const advance = () => {
        setWatingToAdvance(false);
        setCurrentQuestionIdx(currentQuestionIdx + 1);
    };

    const reset = () => {
        setCurrentQuestionIdx(0);
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
        setWatingToAdvance(false);
    };

    if (currentQuestionIdx >= allQuestions.questions.length) {
        return (
            <Reset
                totalQuestions={allQuestions.questions.length}
                correctAnswers={correctAnswers}
                onPress={reset}
            />
        );
    }

    return (
        <div className={styles.app}>
            <StatBar
                currentQuestion={currentQuestionIdx + 1}
                totalQuestion={allQuestions.questions.length}
                correct={correctAnswers}
                incorrect={incorrectAnswer}
            />

            <QuestionComponent
                question={allQuestions.questions[currentQuestionIdx]}
                onSubmit={onSubmit}
            />

            {waitingToAdvance && (
                <button
                    onClick={advance}
                    className={Classnames(Answer_module.answer, styles['next-btn'])}
                >
                    Next Question...
                </button>
            )}
        </div>
    );
}

export default App;
