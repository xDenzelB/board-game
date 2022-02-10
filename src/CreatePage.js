import { useState } from 'react';
import { createGame } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit

  const history = useHistory();
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [designer, setDesigner] = useState('');
  const [description, setDescription] = useState('');
  const [minPlayers, setMinPlayers] = useState(0);
  const [maxPlayers, setMaxPlayers] = useState(0);

  // here's the state you'll need:
    // title;
    // genre;
    // designer;
    // description;
    // minPlayers;
    // maxPlayers;

  async function handleSubmit(e) {
    e.preventDefault();

    // create a game
    await createGame({
      title,
      genre,
      designer,
      description,
      min_players: minPlayers,
      max_players: maxPlayers

    });
    history.push('/board-games');
    // use history.push to send the user to the list page
  }

  return (
    <div className='create'>
      {/* on submit, call your handleSubmit function */}
      <form onSubmit={handleSubmit}>
        <h2>Add board game</h2>
        <label>
            Title
          {/* on change, set the title in state */}
          <input value={title} onChange={e => setTitle(e.target.value)} required name='title' />
        </label>
        <label>
            Genre
          {/* on change, set the genre in state */}
          <select required value={genre} onChange={e => setGenre(e.target.value)}>
            <option>Tile-laying</option>
            <option>Economic</option>
            <option>War</option>
            <option>Card</option>
            <option>Abstract</option>
            <option>Cooperative</option>
            <option>Solo</option>
          </select>
        </label>
        <label>
            Designer
          {/* on change, set the designer in state */}
          <input required value={designer} onChange={e => setDesigner(e.target.value)} name='designer' />
        </label>
        <label>
            Min Players
          {/* on change, set the min players in state */}
          <input required value={minPlayers} onChange={e => setMinPlayers(e.target.value)} name='min_players' />
        </label>
        <label>
            Max Players
          {/* on change, set the max players in state */}
          <input required value={maxPlayers} onChange={e => setMaxPlayers(e.target.value)} name='max_players' />
        </label>
        <label>
            Description
          {/* on change, set the description in state */}
          <textarea required value={description} onChange={e => setDescription(e.target.value)} name='max_players' />
        </label>
        <button>Create game</button>
      </form>
    </div>
  );
}
