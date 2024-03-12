import React from "react";
import { useState, useEffect } from "react";
import { getArtists } from "../services/artists.js";
import Artist from "../components/Artist.jsx";

function Artists() {
  const [artists, setArtists] = useState([]);

  async function fetchArtists() {
    const allArtists = await getArtists();
    setArtists(allArtists);
  }

  useEffect(() => {
    fetchArtists();
  }, []);

  return (
    <div className="artistInfo">
      <h1 className='titles'>All the Artists!</h1>
      <div className="artists-container">
        {artists.map((artist) => (
            <Artist artist={artist}  key={artist._id}/>
        ))}
      </div>
    </div>
  );
}

export default Artists;
