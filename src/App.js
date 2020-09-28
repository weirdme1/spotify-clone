import React, { useEffect } from 'react';
import './App.css';
import Login from './login';
import Player from './player';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './datalayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
      const hash = getTokenFromResponse();
      window.location.hash = "";

      const _token = hash.access_token;
      if (_token) {

        spotify.setAccessToken(_token);

        dispatch({
          type: "SET_TOKEN",
          token: _token,
        });

        spotify.getPlaylist("1XuzcRREJ4he6UnXfG6AS5").then((response) =>
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
        );

        spotify.getMyTopArtists().then((response) =>
          dispatch({
            type: "SET_TOP_ARTISTS",
            top_artists: response,
          })
        );

        dispatch({
          type: "SET_SPOTIFY",
          spotify: spotify,
        });

        spotify.getMe().then((user) => {
          dispatch({
            type: 'SET_USER',
            user: user,
          });
        });

        spotify.getUserPlaylists().then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists,
          });
        });
      }

  }, [token, dispatch])

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
