import { useContext } from 'react';

//context
import GroupsContext from '../../context/GroupsContext';

//components
import Loading from '../common/Loading';
import Heading from "../common/Heading";
import GroupStage from "../groupStage/GroupStage";
import KnockOutStageForm from '../knockOutStage/KnockOutStageForm';

const Home = () => {

    const { loading, stage, groupStagePos } = useContext(GroupsContext);

    return (
        <>
            {
                loading 
                ? <Loading />
                : <>
                    <Heading />
                    {
                        (stage === groupStagePos)
                            ? <GroupStage />        
                            : <KnockOutStageForm />
                    }
                </>
            }    
        </>
    )
}

export default Home;