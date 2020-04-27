import './styles.scss';
import React, { useEffect, useState } from 'react';
import { getGames,
    getTopStreams,
    getUsers } from '../../../api';
import { LOCALE } from '../../../constants/locale.js';
import Streamer from '../Streamer';
import { getQueryParamsID } from '../../../helpers';

function Sidebar () {
    const [streams, setStreams] = useState([]);
    const nbMaxStreamer = 5;

    const fetchData = async () => {
        const reponseTopStreams = await getTopStreams(nbMaxStreamer);
        const topStreamsArray = reponseTopStreams.data.data;

        const gameIDs = topStreamsArray.map((stream) => stream.game_id);
        const userIDs = topStreamsArray.map((stream) => stream.user_id);
        const queryParamsGames = getQueryParamsID(gameIDs);
        const queryParamsUsers = getQueryParamsID(userIDs);

        const responseGames = await getGames(queryParamsGames);
        const gamesArray = responseGames.data.data;
        const reponseUsers = await getUsers(queryParamsUsers);
        const usersArray = reponseUsers.data.data;

        const infosStream = topStreamsArray.map((stream) => {
            const [game] = gamesArray.filter((gameItem) => gameItem.id === stream.game_id);
            const [user] = usersArray.filter((userItem) => userItem.id === stream.user_id);

            stream.realPicture = user.profile_image_url;
            stream.gameName = game.name;
            stream.login = user.login;

            return stream;
        });

        setStreams(infosStream);
    };

    useEffect(
        () => {
            fetchData();
        },
        []
    );

    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">
                {LOCALE.SIDEBAR.TITLE}
            </h2>
            <ul className="list-stream">
                {streams.map((stream) => (
                    <Streamer
                        className="game-item"
                        data={stream}
                        key={stream.id}
                    />
                ))}
            </ul>
        </aside>
    );
}

export default Sidebar;
