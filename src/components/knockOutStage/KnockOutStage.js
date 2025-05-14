import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { urlAssets } from '../../Constants';

//context
import GroupsContext from '../../context/GroupsContext';

//components
import StageName from './StageName';
import KnockOutStageTeam from './KnockOutStageTeam';

const KnockOutStage = props => {

    const { finalFormPos, knockOutStage, setKnockOutStage, setStage } = useContext(GroupsContext);

    const { setChampion, width } = props;

    const roundOf16StagePos = 0;
    const quarterFinalsStagePos = 1;
    const semiFinalsStagePos = 2;
    const finalStagePos = 3;
    const [currentStage, setCurrentStage] = useState([true, false, false, false, false]);
    const instructionsStage = [
        {
            text: " los equipos que crees que pasarán a cuartos del final"
        },
        {
            text: " los equipos que crees que pasarán a semifinales"
        },
        {
            text: " los equipos que crees que pasarán a la final"
        },
        {
            text: "l equipo que crees que será campeón"
        }
    ]
    const [errorMatch, setErrorMatch] = useState(false);

    const initialSelectedTeam = '';
    const [selectedTeamMatch1, setSelectedTeamMatch1] = useState(initialSelectedTeam);
    const [selectedTeamMatch2, setSelectedTeamMatch2] = useState(initialSelectedTeam);
    const [selectedTeamMatch3, setSelectedTeamMatch3] = useState(initialSelectedTeam);
    const [selectedTeamMatch4, setSelectedTeamMatch4] = useState(initialSelectedTeam);
    const [selectedTeamMatch5, setSelectedTeamMatch5] = useState(initialSelectedTeam);
    const [selectedTeamMatch6, setSelectedTeamMatch6] = useState(initialSelectedTeam);
    const [selectedTeamMatch7, setSelectedTeamMatch7] = useState(initialSelectedTeam);
    const [selectedTeamMatch8, setSelectedTeamMatch8] = useState(initialSelectedTeam);

    const initialMatches = 8;
    var nextStage = [];
    const [winners, setWinners] = useState(new Array(initialMatches).fill(null));

    const setSelectedTeam = (id, idTeam) => {
        switch(id){
            case 1:
                return setSelectedTeamMatch1(idTeam);
            case 2:
                return setSelectedTeamMatch2(idTeam);
            case 3:
                return setSelectedTeamMatch3(idTeam);
            case 4:
                return setSelectedTeamMatch4(idTeam);
            case 5:
                return setSelectedTeamMatch5(idTeam);
            case 6:
                return setSelectedTeamMatch6(idTeam);
            case 7:
                return setSelectedTeamMatch7(idTeam);
            case 8:
                return setSelectedTeamMatch8(idTeam);
            default:
               return;
        }
    }

    const getSelectedTeam = id => {
        switch(id){
            case 1:
                return selectedTeamMatch1;
            case 2:
                return selectedTeamMatch2;
            case 3:
                return selectedTeamMatch3;
            case 4:
                return selectedTeamMatch4;
            case 5:
                return selectedTeamMatch5;
            case 6:
                return selectedTeamMatch6;
            case 7:
                return selectedTeamMatch7;
            case 8:
                return selectedTeamMatch8;
            default:
                return '';
        }
    }
    
    const addWinners = (index, id, team) => {
        errorMatch && setErrorMatch(false);
        setSelectedTeam(id, `${id}-${team}`);
        winners[index] = knockOutStage[index][team];
    }

    const getCurrentStage = () => currentStage.findIndex(pos => pos === true);

    const getSelected = (id, idTeam) => (idTeam === getSelectedTeam(id)) ? 'selected' : 'unselected';

    const unselectTeams = () => {
        setSelectedTeamMatch1(initialSelectedTeam);
        setSelectedTeamMatch2(initialSelectedTeam);
        setSelectedTeamMatch3(initialSelectedTeam);
        setSelectedTeamMatch4(initialSelectedTeam);
        setSelectedTeamMatch5(initialSelectedTeam);
        setSelectedTeamMatch6(initialSelectedTeam);
        setSelectedTeamMatch7(initialSelectedTeam);
        setSelectedTeamMatch8(initialSelectedTeam);
    }

    const setNextStage = () => {

        if(!winners.some(item => item === null) && winners.length > 1){
            winners.map((winner, i) => { 
                if(i % 2 === 0){
                    nextStage = [ ...nextStage, {
                        id: Math.ceil((i+1)/2), 
                        team1: {
                            id: 1,
                            slug: winners[i].slug,
                            name: winners[i].name,
                            playOff: winners[i].playOff ? winners[i].playOff : '',
                        }, 
                        team2: {
                            id: 2,
                            slug: winners[i+1].slug,
                            name: winners[i+1].name,
                            playOff: winners[i+1].playOff ? winners[i+1].playOff : '',
                        }
                    }]
                }
            });
            setKnockOutStage(nextStage);

            var tmpCurrentStage = currentStage;
            var currentStagePos = getCurrentStage();
            tmpCurrentStage.fill(false);
            tmpCurrentStage[currentStagePos+1] = true;

            setCurrentStage(tmpCurrentStage);
            setWinners(new Array(winners.length/2).fill(null));
            unselectTeams();            
        }
        else if (winners.length === 1){
            setChampion(winners[0])
            setStage(finalFormPos);
        }
        else{
            setErrorMatch(true);
        }
    }

    return (
        <section className="my-3 px-0">
            <section className="text-center">
                <p className="mb-0 px-3 px-md-0 team-name">Dale click a{instructionsStage[getCurrentStage()].text}</p>
            </section>
            <section className={`d-flex justify-content-center flex-column flex-md-row ${width} mx-auto my-1 my-md-3`}>
                <article className="d-flex justify-content-center my-1 text-center">
                    <StageName activeClass={currentStage[roundOf16StagePos]} stageName="OCTAVOS"/>
                    <StageName activeClass={currentStage[quarterFinalsStagePos]} stageName="CUARTOS"/>
                </article>
                <article className="d-flex justify-content-center my-1 text-center">
                    <StageName activeClass={currentStage[semiFinalsStagePos]} stageName="SEMIFINAL"/>
                    <StageName activeClass={currentStage[finalStagePos]} stageName="FINAL"/>
                </article>            
            </section>
            <section className={`row mt-4 justify-content-between px-0 mx-auto ${width}`}>
                {
                    knockOutStage.map((match, i) => 
                        <div key={match.id} className="btn-group" role="group" aria-label={`Match ${match.id}`}>
                            <KnockOutStageTeam 
                                addWinner={addWinners} 
                                buttonClass={`w-100 btn d-flex justify-content-between align-items-center p-1 p-md-2 knockout-stage-${getSelected(match.id, `${match.id}-team1`)}-team`}
                                id={match.id}
                                image={`${urlAssets}/img/${getSelected(match.id, `${match.id}-team1`)}.png`}
                                index={i}
                                name={match.team1.name}
                                sectionClass="ps-0 pe-1"
                                slug={!match.team1.playOff ? match.team1.slug : 'repesca'}
                                team="team1"
                                textColor={`text-${getSelected(match.id, `${match.id}-team1`)}`} 
                                urlAssets={urlAssets}
                            />
                            <KnockOutStageTeam 
                                addWinner={addWinners} 
                                buttonClass={`w-100 btn d-flex justify-content-between align-items-center p-1 p-md-2 knockout-stage-${getSelected(match.id, `${match.id}-team2`)}-team`}
                                id={match.id}
                                image={`${urlAssets}/img/${getSelected(match.id, `${match.id}-team2`)}.png`}
                                index={i}
                                name={match.team2.name}
                                sectionClass="ps-1 pe-0"
                                slug={!match.team2.playOff ? match.team2.slug : 'repesca'}
                                team="team2"
                                textColor={`text-${getSelected(match.id, `${match.id}-team2`)}`} 
                                urlAssets={urlAssets}
                            />   
                        </div>
                    )       
                }    
                {   errorMatch && 
                    <section className="col-12 mt-2 text-center">
                        <span className="text-danger team-name">Debes elegir un ganador por cada partido</span>
                    </section>
                }  
                <section className="col-12 d-flex justify-content-center my-4">
                    <button 
                        className="btn btn-next text-white" 
                        type="button"
                        onClick={() => setNextStage() }
                    >
                        SIGUIENTE
                    </button>
                </section>
            </section>
        </section>
    )
}

export default KnockOutStage;

KnockOutStage.propTypes = {
    setChampion: PropTypes.func.isRequired,
    width: PropTypes.string.isRequired
}