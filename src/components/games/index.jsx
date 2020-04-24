import './styles.scss';
import React, { useEffect, useState } from 'react';
import Card from '../common/Card';
import { LOCALE } from '../../constants/locale.js';
import { getImgSize } from '../../helpers';
import { getTopGames } from '../../api';


function Games () {
    const [games, setGames] = useState([]);

    const fetchData = async () => {
        const response = await getTopGames();
        const gamesArray = response.data.data;
        gamesArray.map((game) => {
            game.box_art_url = getImgSize(
                game.box_art_url,
                '285',
                '380'
            );
            return game;
        });
        setGames(gamesArray);
    };

    useEffect(
        () => {
            fetchData();
        },
        []
    );

    return (
        <main>
            <div className="games">
                <h1 className="games-title">
                    {LOCALE.GAMES.TITLE}
                </h1>
                <div className="games-list">
                    {games.map((game) => (
                        <Card
                            className="game-item"
                            data={game}
                            key={game.id}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Games;
