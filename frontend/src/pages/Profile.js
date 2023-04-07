import axios from 'axios';
import './Profile.css';
import CircleIcon from '@mui/icons-material/Circle';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ProfilePage() {
  return (
    <>
      <div className="polygon container-fluid w-100">
        <div className="d-flex pt-4  justify-content-start">
          <div className="flex-col text-start">
            <img
              src="/users/default.jpg"
              className="flex-start w-100 img"
              alt="user profile"
            />
            <div className="edit-profile-div mt-4">
              <Button
                variant="contained"
                className="edit-profile-btn w-100 pt-2"
              >
                <Link className="edit-link">Edit Profile</Link>
              </Button>
            </div>
            <p className="value mt-2 mb-1">
              Rating &nbsp;&nbsp;<span className="result">4.5/10</span>
            </p>
            <p className="value">
              Reputation &nbsp;&nbsp;<span className="result">50</span>
            </p>
          </div>
          <div className="flex-col w-100 text-start pe-2">
            <h1 className="name ms-4 p-0">Hrishikesh A. Tiwari</h1>

            <p className="ms-4">
              <span>
                <CircleIcon className="circle-alert" />
              </span>{' '}
              working
            </p>
          </div>
        </div>
      </div>
      <div id="info container-fluid w-100">
        <div className="row">
          <div className="facts col-12 col-lg-6 col-md-6  bg-warning">
            <div className="stats">Stats</div>
          </div>
          <div className="facts col-lg-6 col-md-6 col-xl-6 col-xxl-6 bg-success">
            Summary
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;

export async function loader({ params }) {
  // const response = await axios('http://localhost:5001/peers/' + params);
  console.log(params);
  return null;
}
