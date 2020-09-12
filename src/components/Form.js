import React, { useState } from "react";

const Form = ({ setSearchLyric }) => {
  const [search, setSearch] = useState({
    artist: "",
    song: "",
  });

  const [error, setError] = useState(false);

  const { artist, song } = search;

  const updateState = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (artist.trim() === "" || song.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    setSearchLyric(search);
  };

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pmb"
            onSubmit={handleSubmit}
          >
            <fieldset>
              <legend className="text-center">Song lyrics search</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artist</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Artist name"
                      onChange={updateState}
                      value={artist}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Song</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Song name"
                      onChange={updateState}
                      value={song}
                    />
                  </div>
                </div>
              </div>

              {error === true ? (
                <p className="alert alert-danger text-center p-2">
                  All fields are required
                </p>
              ) : null}

              <button
                type="submit"
                value="Search"
                className="btn btn-primary float-right"
              >
                Search
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
