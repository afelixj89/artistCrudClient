import { Link } from "react-router-dom";

function Artist({ artist }) {
  return (
    <div className="artistsCard">
      <h1>{`Stage Name: ${artist.name}`}</h1>
      <Link to={`/artists/${artist._id}`}>
      <p>Click Here to See my Real Name!</p></Link>
      <a href={`${artist.uri}`}>Link to {artist.name}'s Profile</a>
    </div>
  );
}

export default Artist;
