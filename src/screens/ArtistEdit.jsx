import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArtistById, editArtist } from "../services/artists.js";

function ArtistEdit() {
  const [artist, setArtist] = useState({
    name: "",
    uri: "",
    realname: "",
    releases: [""],
    video_url: "",
  });

  let { id } = useParams()
  let navigate = useNavigate();

  async function fetchArtist() {
    const oneArtist = await getArtistById(id)
    setArtist(oneArtist)
  }

  useEffect(() => {
    fetchArtist()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    await editArtist(id, artist);
    navigate(`/artists/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setArtist((prevArtist) => ({
      ...prevArtist,
      [name]: value,
    }));
  };

  
  return (
    <div>
     <h1 className='titles'>Edit Jeremy's Database!</h1>
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
        <button id="submitButton" type="submit">Edit Artist!</button>
      </form>
    </div>
  );
}

export default ArtistEdit;