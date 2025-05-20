import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";

//constants
import {
  epigraph,
  isPlayed,
  urlFlags,
  sessionStorageKey,
} from "../../Constants";

//teams
import { teamsByGroup } from "../../teams/TeamsByGroup";

//context
import GroupsContext from "../../context/GroupsContext";

//components
import MatchesByGroup from "./MatchesByGroup";
import StandingByGroup from "./StandingByGroup";

const GroupStage = () => {
  const { scores, setKnockOutStage, setStage, knockOutStagePos } =
    useContext(GroupsContext);

  const [standings, setStandings] = useState([]);
  const [showStandings, setShowStandings] = useState(false);

  const {
    register: registerA,
    formState: { errors: errorsA },
    handleSubmit: handleSubmitA,
  } = useForm({ mode: "onSubmit" });

  const {
    register: registerB,
    formState: { errors: errorsB },
    handleSubmit: handleSubmitB,
  } = useForm({ mode: "onSubmit" });

  const {
    register: registerC,
    formState: { errors: errorsC },
    handleSubmit: handleSubmitC,
  } = useForm({ mode: "onSubmit" });

  const {
    register: registerD,
    formState: { errors: errorsD },
    handleSubmit: handleSubmitD,
  } = useForm({ mode: "onSubmit" });

  const {
    register: registerE,
    formState: { errors: errorsE },
    handleSubmit: handleSubmitE,
  } = useForm({ mode: "onSubmit" });

  const {
    register: registerF,
    formState: { errors: errorsF },
    handleSubmit: handleSubmitF,
  } = useForm({ mode: "onSubmit" });

  const {
    register: registerG,
    formState: { errors: errorsG },
    handleSubmit: handleSubmitG,
  } = useForm({ mode: "onSubmit" });

  const {
    register: registerH,
    formState: { errors: errorsH },
    handleSubmit: handleSubmitH,
  } = useForm({ mode: "onSubmit" });

  const pointsWinner = 3;
  const pointsTie = 1;
  const pointsLoser = 0;
  var matchResults = [];

  const getMatches = (scoresApi) => {
    var matches = [];
    var match = {};
    var matchNumber = "";
    var groupId = "";
    var home = "";
    var goalsHome = 0;
    var goalsAway = 0;
    var away = "";
    var stadium = "";
    var matchDate = "";
    var matchHour = "";
    var finished = false;
    var completedApi = false;

    var pointsHome = 0;
    var pointsAway = 0;
    var winner = "";
    var drawnHome = "";
    var drawnAway = "";
    var loser = "";
    var fromApi = false;
    var fromSessionStorage = false;

    Object.values(scoresApi).map((score) => {
      groupId = score.c[0]["v"];
      matchNumber = parseInt(score.c[1]["v"]);
      home = score.c[2]["v"];
      goalsHome = parseInt(score.c[3]["v"]);
      goalsAway = parseInt(score.c[4]["v"]);
      away = score.c[5]["v"];
      finished = score.c[6]["v"] === isPlayed && true;
      completedApi = score.c[6]["v"] === isPlayed && true;
      stadium = score.c[7]["v"];
      matchDate = score.c[8]["v"];
      matchHour = score.c[9]["v"];

      if (finished) {
        matchResults = getMatchResults(
          home,
          away,
          goalsHome,
          goalsAway,
          pointsHome,
          pointsAway,
          drawnHome,
          drawnAway,
          winner,
          loser
        );
        fromApi = true;
      }

      match = {
        groupId,
        matchNumber,
        home,
        goalsHome,
        goalsAway,
        away,
        finished,
        completedApi,
        stadium,
        matchDate,
        matchHour,
        pointsHome: matchResults[0],
        pointsAway: matchResults[1],
        winner: matchResults[4],
        loser: matchResults[5],
        drawnHome: matchResults[2],
        drawnAway: matchResults[3],
        fromApi,
        fromSessionStorage,
      };

      //matches = [...matches, match];
      matches[matchNumber] = match;
      winner = "";
      drawnHome = "";
      drawnAway = "";
      loser = "";
      matchResults = [];
    });

    return matches;
  };

  const getMatchesFromSessionStorage = () => {
    let matches = [];
    let dataFromSessionStorage =
      sessionStorage.getItem(sessionStorageKey) || "";

    if (dataFromSessionStorage && typeof dataFromSessionStorage === "string") {
      try {
        matches = JSON.parse(dataFromSessionStorage);
      } catch (err) {
        console.log(err);
      }
    }

    return matches;
  };

  const getMatchResults = (
    home,
    away,
    goalsHome,
    goalsAway,
    pointsHome,
    pointsAway,
    drawnHome,
    drawnAway,
    winner,
    loser
  ) => {
    pointsHome = pointsTie;
    pointsAway = pointsTie;
    drawnHome = home;
    drawnAway = away;

    if (goalsHome > goalsAway) {
      pointsHome = pointsWinner;
      pointsAway = pointsLoser;
      winner = home;
      loser = away;
      drawnHome = "";
      drawnAway = "";
    } else if (goalsAway > goalsHome) {
      pointsAway = pointsWinner;
      pointsHome = pointsLoser;
      winner = away;
      loser = home;
      drawnHome = "";
      drawnAway = "";
    }

    return [pointsHome, pointsAway, drawnHome, drawnAway, winner, loser];
  };

  const matchesFromApi = getMatches(scores);
  const matchesFromSessionStorage = getMatchesFromSessionStorage();

  const restoreMatchesKeys = (matchesForKey) => {
    const entries = Object.keys(matchesForKey).map((matchkey) => {
      let nMatchkey = parseInt(matchkey);
      let match = matchesForKey[nMatchkey];
      let newKey = match.matchNumber;
      return { [newKey]: match };
    });
    return Object.assign([], ...entries);
  };

  const matches =
    matchesFromSessionStorage.length > 0
      ? restoreMatchesKeys(matchesFromSessionStorage)
      : matchesFromApi;

  const getMatchesByGroup = () => {
    const groupByGroupId = matches.reduce((group, match) => {
      const { groupId } = match;
      group[groupId] = group[groupId] ?? [];
      group[groupId] = [...group[groupId], match];
      return group;
    }, {});

    return groupByGroupId;
  };

  const breakTies = (arrayTeams) => {
    arrayTeams.sort((a, b) => {
      if (a.points !== b.points) {
        return b.points - a.points;
      }

      if (a.goalsDifference !== b.goalsDifference) {
        return b.goalsDifference - a.goalsDifference;
      }

      return b.goalsFor - a.goalsFor;
    });

    return arrayTeams;
  };

  const getStandingByGroup = (matches, teams) => {
    var pointsHome = 0;
    var pointsAway = 0;
    var playedMatches = 0;
    var goalsFor = 0;
    var goalsAgainst = 0;
    var wonMatches = 0;
    var drawnMatches = 0;
    var lostMatches = 0;
    var arrayTeams = [];

    Object.values(teams).map((team) => {
      matches.map((match) => {
        if (match.finished) {
          if (team.id === match.home) {
            pointsHome += match.pointsHome;
            playedMatches++;
            goalsFor += match.goalsHome;
            goalsAgainst += match.goalsAway;
          }
          if (team.id === match.away) {
            pointsAway += match.pointsAway;
            playedMatches++;
            goalsFor += match.goalsAway;
            goalsAgainst += match.goalsHome;
          }
          if (team.id === match.winner) {
            wonMatches++;
          }
          if (team.id === match.loser) {
            lostMatches++;
          }
          if (team.id === match.drawnHome || team.id === match.drawnAway) {
            drawnMatches++;
          }
        }
      });

      team.points = pointsHome + pointsAway;
      team.playedMatches = playedMatches;
      team.goalsFor = goalsFor;
      team.goalsAgainst = goalsAgainst;
      team.goalsDifference = goalsFor - goalsAgainst;
      team.wonMatches = wonMatches;
      team.lostMatches = lostMatches;
      team.drawnMatches = drawnMatches;

      pointsHome = 0;
      pointsAway = 0;
      playedMatches = 0;
      goalsFor = 0;
      goalsAgainst = 0;

      wonMatches = 0;
      drawnMatches = 0;
      lostMatches = 0;
    });

    arrayTeams = Object.values(teams);
    arrayTeams.sort((a, b) => (b.points > a.points ? 1 : -1));
    return breakTies(arrayTeams);
  };

  const getAllStandings = (matchesByGroup) => {
    var standings = [];

    Object.keys(matchesByGroup)
      .sort()
      .map((groupId) => {
        var matchesByGroup = getMatchesByGroup();
        standings[groupId] = getStandingByGroup(
          matchesByGroup[groupId],
          teamsByGroup[groupId]
        );
      });

    return standings;
  };

  const matchesByGroup = getMatchesByGroup();

  useEffect(() => {
    setStandings(getAllStandings(matchesByGroup));
    setShowStandings(true);
  }, []);

  const UserPersistForm = (matchesForPersist) =>
    sessionStorage.setItem(
      sessionStorageKey,
      JSON.stringify(matches.filter((mch) => mch !== null))
    );

  const onSubmitFormA = (data) => updateStanding(data);

  const onSubmitFormB = (data) => updateStanding(data);

  const onSubmitFormC = (data) => updateStanding(data);

  const onSubmitFormD = (data) => updateStanding(data);

  const onSubmitFormE = (data) => updateStanding(data);

  const onSubmitFormF = (data) => updateStanding(data);

  const onSubmitFormG = (data) => updateStanding(data);

  const onSubmitFormH = (data) => updateStanding(data);

  const updateStanding = (data) => {
    var pointsHome = 0;
    var pointsAway = 0;
    var winner = "";
    var drawnHome = "";
    var drawnAway = "";
    var loser = "";

    var home = "";
    var goalsHome = 0;
    var goalsAway = 0;
    var away = "";

    const groupId = data.group;
    var matchesByGroup = getMatchesByGroup(matches);
    const matchesOfGroup = matchesByGroup[groupId];
    const matchesNumbers = matchesOfGroup.map((match) => match.matchNumber);

    matchesNumbers.map((matchNum) => {
      home = data[`match${matchNum}Home`];
      goalsHome = data[`match${matchNum}HomeGoals`];
      goalsAway = data[`match${matchNum}AwayGoals`];
      away = data[`match${matchNum}Away`];

      if (Number.isInteger(goalsHome) && Number.isInteger(goalsAway)) {
        matchResults = getMatchResults(
          home,
          away,
          goalsHome,
          goalsAway,
          pointsHome,
          pointsAway,
          drawnHome,
          drawnAway,
          winner,
          loser
        );

        matches[matchNum].goalsHome = goalsHome;
        matches[matchNum].goalsAway = goalsAway;
        matches[matchNum].finished = true;
        matches[matchNum].pointsHome = matchResults[0];
        matches[matchNum].pointsAway = matchResults[1];
        matches[matchNum].winner = matchResults[4];
        matches[matchNum].loser = matchResults[5];
        matches[matchNum].drawnHome = matchResults[2];
        matches[matchNum].drawnAway = matchResults[3];
        matches[matchNum].update = true;
        matches[matchNum].fromSessionStorage = true;

        winner = "";
        drawnHome = "";
        drawnAway = "";
        loser = "";
        matchResults = [];
      }
    });

    const newStanding = getStandingByGroup(
      matchesByGroup[groupId],
      teamsByGroup[groupId]
    );
    const prevStandings = standings;
    prevStandings[groupId] = newStanding;
    setStandings(prevStandings);
    getKnockoutStage();
    UserPersistForm(matches);
  };

  const formErrors = {
    A: errorsA,
    B: errorsB,
    C: errorsC,
    D: errorsD,
    E: errorsE,
    F: errorsF,
    G: errorsG,
    H: errorsH,
  };

  const handleSubmitForms = {
    A: handleSubmitA,
    B: handleSubmitB,
    C: handleSubmitC,
    D: handleSubmitD,
    E: handleSubmitE,
    F: handleSubmitF,
    G: handleSubmitG,
    H: handleSubmitH,
  };

  const onSubmitForms = {
    A: onSubmitFormA,
    B: onSubmitFormB,
    C: onSubmitFormC,
    D: onSubmitFormD,
    E: onSubmitFormE,
    F: onSubmitFormF,
    G: onSubmitFormG,
    H: onSubmitFormH,
  };

  const registerForms = {
    A: registerA,
    B: registerB,
    C: registerC,
    D: registerD,
    E: registerE,
    F: registerF,
    G: registerG,
    H: registerH,
  };

  const getKnockoutStage = () => {
    const qualifiedTeams = [
      {
        id: 1,
        team1: standings["A"][0],
        team2: standings["B"][1],
      },
      {
        id: 2,
        team1: standings["C"][0],
        team2: standings["D"][1],
      },
      {
        id: 3,
        team1: standings["E"][0],
        team2: standings["F"][1],
      },
      {
        id: 4,
        team1: standings["G"][0],
        team2: standings["H"][1],
      },

      {
        id: 5,
        team1: standings["B"][0],
        team2: standings["A"][1],
      },
      {
        id: 6,
        team1: standings["D"][0],
        team2: standings["C"][1],
      },
      {
        id: 7,
        team1: standings["F"][0],
        team2: standings["E"][1],
      },
      {
        id: 8,
        team1: standings["H"][0],
        team2: standings["G"][1],
      },
    ];

    setKnockOutStage(qualifiedTeams);
  };

  return (
    <section>
      <section className="text-center">
        <p className="mb-0 title">{epigraph}</p>
      </section>
      <section className="row my-4 px-2 px-md-0">
        {Object.keys(matchesByGroup)
          .sort()
          .map((groupLetter) => (
            <section key={groupLetter} className="col-12 col-md-6 px-1 px-md-2">
              <MatchesByGroup
                group={groupLetter}
                errors={formErrors[groupLetter]}
                handleSubmitForm={handleSubmitForms[groupLetter]}
                matches={matchesByGroup[groupLetter]}
                onSubmitForm={onSubmitForms[groupLetter]}
                register={registerForms[groupLetter]}
                teams={teamsByGroup[groupLetter]}
                urlAssets={urlFlags}
              />
              {showStandings && (
                <StandingByGroup
                  standings={standings[groupLetter]}
                  urlAssets={urlFlags}
                />
              )}
            </section>
          ))}
        {matches.every((match) => match.finished === true) && (
          <section className="col-12 d-flex justify-content-center">
            <button
              className="btn btn-next text-white"
              style={{
                padding: "7px 16px",
                borderRadius: "17px",
                height: "33px",
                border: "1px solid #fff",
              }}
              type="button"
              onClick={() => {
                setStage(knockOutStagePos);
                handleSubmitD(onSubmitFormD({ group: "H" }));
              }}
            >
              Siguiente
            </button>
          </section>
        )}
      </section>
    </section>
  );
};

export default GroupStage;
