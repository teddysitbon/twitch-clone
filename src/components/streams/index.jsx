import './styles.scss';
import React, { useEffect, useState } from 'react';
import Card from '../common/Card';
import { LOCALE } from '../../constants/locale.js';
import { getImgSize } from '../../helpers';
import { getTopStreams } from '../../api';


function Games () {
    const [streams, setStreams] = useState([]);

    const fetchData = async () => {
        const response = await getTopStreams();
        const gamesArray = response.data.data;
        gamesArray.map((game) => {
            game.box_art_url = getImgSize(
                game.box_art_url,
                '285',
                '380'
            );
            return game;
        });
        setStreams(gamesArray);
    };

    useEffect(
        () => {
            fetchData();
        },
        []
    );

    return (
        <main>
            <div className="streams">
                <h1 className="streams-title">
                    {LOCALE.STREAMS.TITLE}
                </h1>
                <div className="streams-list">
                    {streams.map((stream) => (
                        <Card
                            className="stream-item"
                            data={stream}
                            key={stream.id}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Games;
