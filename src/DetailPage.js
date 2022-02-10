import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getGameById } from './services/fetch-utils';

export default function DetailPage() {
  const [game, setGame] = useState({});
  const match = useRouteMatch();
  
  useEffect(() => {
    async function fetch() {
      const games = await getGameById(match.params.id);

      setGame(games);
    }

    fetch();
  }, [match.params.id]);
 

  // on mount, fetch and set in state the correct board game for this id (the id can be found in match.params using the correct react-router hook)

  return (
    <div className='detail'>
      <h1>{game.title}</h1>
      <h2>A {game.genre} game for {game.min_players} to {game.max_players} players</h2>
      <h3>by celebrated designer {game.designer}</h3>
      <p>
        {game.description}
      </p>
    </div>
  );
}
