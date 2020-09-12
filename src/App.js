import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";

const App = () => {
  const [searchLyric, setSearchLyric] = useState({});

  const [lyrics, setLyrics] = useState("");

  useEffect(() => {
    // Check if searchLyric object is empty
    if (Object.keys(searchLyric).length === 0) return;

    const callApiAsync = async () => {
      const { artist, song } = searchLyric;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      const res = await axios.get(url).catch((error) => {
        console.log(error.toJSON());
      });

      setLyrics(res.data.lyrics);
    };

    callApiAsync();
  }, [searchLyric]);

  return <Form Lyric={searchLyric} setSearchLyric={setSearchLyric} />;
};

export default App;
