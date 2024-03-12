import { useState, useEffect } from 'react';
import { getArtistById , deleteArtist} from "../services/artists.js";
import { Link, useParams, useNavigate } from "react-router-dom";

function ArtistDetail() {
  const [artist, setArtist] = useState({})

  let { id } = useParams()
  let navigate = useNavigate()

  const fetchArtist = async () => {
    const oneArtist = await getArtistById(id)
    setArtist(oneArtist)
  }

  useEffect(() => {
    fetchArtist()
  }, [])

  const handleDelete = async () => {
    await deleteArtist(id)
    navigate("/artists")
  }

  return (
    <div>
      <h1 className='titles'>My Real Name is {artist.realname}!!</h1>

      <div>
        <Link to={`/artist/${id}/edit`}>
          <button id="submitButton" >Edit Artist</button>
        </Link>
        <button id="submitButton" onClick={handleDelete}>Delete Artist</button>
      </div>
    </div>
  )
}

export default ArtistDetail