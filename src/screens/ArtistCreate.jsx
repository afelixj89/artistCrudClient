import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createArtist } from "../services/artists.js";

function ArtistCreate() {
  const [artist, setArtist] = useState({
    name: "",
    uri: "",
    realname: "",
    releases: [""],
    video_url: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createArtist(artist);
    navigate("/artists");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setArtist((prevArtists) => ({
      ...prevArtists,
      [name]: value,
    }));
  };



  return (
    <div>
      <h1 className="titles">Add an artist to Jeremy's Database!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please add the Artist's name"
          name="name"
          value={artist.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Artist's Discogs Link"
          name="uri"
          value={artist.uri}
          onChange={handleChange}
        />
        
        <input
          type="text"
          placeholder="Artist's Real Name"
          name="realname"
          value={artist.realname}
          onChange={handleChange}
        />
       
        <input
          type="text"
          placeholder="Add Video url"
          name="video_url"
          value={artist.video_url}
          onChange={handleChange}
        />
        <div>
        
        </div>
        <button id="submitButton" type="submit">Create an Artist!</button>
      </form>
    </div>
  );
}

export default ArtistCreate;