import * as gameService from '../../services/gameService';
import { useEffect, useState } from 'react';
import GameListItem from './GameListItem';


const GameList = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAllGames()
            .then(result => setGames(result));
    }, [])

    return (

        <section id="catalog-page" >
            <h1>All Games</h1>

            {games.map(game => (
                <GameListItem key={game._id} title={game.title} category={game.category} imageUrl={game.imageUrl} />
            ))}

            {games.length === 0 && <h3 className="no-articles">No articles yet</h3>}


        </section >

    );
};

export default GameList;