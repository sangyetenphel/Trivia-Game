import { createBoard } from '@wixc3/react-board';
import StatBar from '../../../components/StatBar';

export default createBoard({
    name: 'StatBar',
    Board: () => <StatBar currentQuestion={1} totalQuestion={1} correct={1} incorrect={0}/>,
    isSnippet: true,
});