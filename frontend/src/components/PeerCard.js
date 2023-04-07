import { Link } from 'react-router-dom';

export default function PeerCard({ peer }) {
  // console.log(peer);
  return (
    <div className="col-12 col-md-6 col-lg-4 col col-xl-4 col-xxl-4">
      <div className="card mx-auto" style={{ width: '20rem' }}>
        <img
          src={`users/${peer.photo}`}
          className="card-img-top card-img"
          alt="profile"
        ></img>
        <div className="card-body">
          <h5 className="card-title name">{peer.name}</h5>
          <p className="card-text">{peer.summary}</p>
          <div className="card__footer">
            <p className="card__footer-props">
              <span className="card__footer-value">Reputaion</span>{' '}
              <span className="card__footer-text">{peer.reputation}</span>
            </p>
            <p className="card__footer-props">
              <span className="card__footer-value">Profession</span>{' '}
              <span className="card__footer-text">{peer.profession}</span>
            </p>
            <p className="card__ratings">
              <span className="card__footer-value">Skills</span>{' '}
              <span className="card__footer-text">
                {peer.ratingsQuantity === 0
                  ? 'Unrated'
                  : `${peer.skillsRating}/10`}
              </span>
            </p>
            <Link to="/peers" className="btn  btn--small">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
