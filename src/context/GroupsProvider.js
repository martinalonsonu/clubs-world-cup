import { useState } from 'react';

//context
import GroupsContext from './GroupsContext';

//hooks
import { useScores } from '../hooks/useScores';

const GroupsProvider = ({ children }) => {

    const groupStagePos = 0;
    const knockOutStagePos = 1;
    const finalFormPos = 2;
    const [knockOutStage, setKnockOutStage] = useState([]);
    const [stage, setStage] = useState(groupStagePos);
    const [loading, scores] = useScores();

    return (
        <GroupsContext.Provider 
            value={
                { 
                    loading, scores,
                    knockOutStage, setKnockOutStage, 
                    groupStagePos, knockOutStagePos, finalFormPos,
                    stage, setStage
                }
            }
        >
            { children }
        </GroupsContext.Provider>
    )
}

export default GroupsProvider;