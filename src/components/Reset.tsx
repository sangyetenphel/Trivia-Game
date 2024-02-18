import Answer_module from './Answer.module.scss';
import App_module from '../App.module.scss';
import Classnames from 'classnames';
import Reset_module from './Reset.module.scss';
type Props = {
    correctAnswers: number;
    totalQuestions: number;
    onPress: () => void;
};

function Reset(props: Props) {
    return (
        <div>
            <h1 className={Reset_module['reset-text']}>
                You Scored: {(props.correctAnswers / props.totalQuestions) * 100}%
            </h1>
            <button
                onClick={props.onPress}
                className={Classnames(Answer_module.answer, Reset_module['reset-btn'])}
            >
                Press To Try Again!
            </button>
        </div>
    );
}

export default Reset;