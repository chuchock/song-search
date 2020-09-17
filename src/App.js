import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import Song from "./components/Song";
import ArtistInfo from "./components/ArtistInfo";

const App = () => {
  const [searchLyric, setSearchLyric] = useState({});

  const [lyrics, setLyrics] = useState("");

  const [artistInfo, setArtistInfo] = useState({});

  useEffect(() => {
    // Check if searchLyric object is empty
    if (Object.keys(searchLyric).length === 0) return;

    const callApiAsync = async () => {
      const { artist, song } = searchLyric;

      // Get song
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      // Get artist info
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [lyricsResult, artistInfoResult] = await Promise.all([
        axios.get(url),
        axios.get(url2)
      ]);

      setLyrics(lyricsResult.data.lyrics);
      setArtistInfo(artistInfoResult.data.artists[0]);
    };

    callApiAsync();
  }, [searchLyric]);

  return (
    <>
      <Form Lyric={searchLyric} setSearchLyric={setSearchLyric} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <ArtistInfo artistInfo={artistInfo} />
          </div>

          <div className="col-md-6">
            <Song lyrics={lyrics} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
