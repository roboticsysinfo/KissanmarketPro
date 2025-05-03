import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFarmers } from '../redux/slices/farmerSlice';
import { sendFamilyRequest, getRequestsForCustomer } from '../redux/slices/farmerFamilySlice';
import { Image, Spinner } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import farmernotfound from "../assets/emptystate/farmernotfound.png";
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { FaCheckCircle } from "react-icons/fa";


const FarmersSection = () => {
  const dispatch = useDispatch();
  const navigate = useDispatch()
  const { farmers, loading, error } = useSelector((state) => state.farmers);
  const { customerRequests, loading: requestLoading } = useSelector((state) => state.familyfarmer);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;

  useEffect(() => {
    dispatch(fetchFarmers());
    if (userId) {
      dispatch(getRequestsForCustomer(userId));
    }
  }, [dispatch, userId]);

  const handleSendRequest = (farmerId) => {
    if (userId) {
      dispatch(sendFamilyRequest({ fromCustomer: userId, toFarmer: farmerId }))
        .unwrap()
        .then(() => {
          toast.success("Request sent successfully! 🎉");
          dispatch(getRequestsForCustomer(userId));
        })
        .catch((err) => {
          toast.error(err?.message || "Failed to send request ");
        });
    }
  };

  const getRequestStatus = (farmerId) => {
    const request = customerRequests.find(
      (req) => req.toFarmer?._id === farmerId
    );
    return request ? request.status : null;
  };

  return (
    <div className="container py-60 my-60">
      <div className="row">
        {(loading || requestLoading) && <Spinner variant='success' style={{ margin: "auto" }} />}
        {error && <p className="text-danger">Error: {error}</p>}

        {!loading && farmers.length === 0 && (
          <div className="text-center">
            <Image src={farmernotfound} width={300} height={300} />
            <h4>No farmers found.</h4>
            <p>Please check back later.</p>
          </div>
        )}

        {!loading && farmers.length > 0 && farmers.map((farmer) => {
          const status = getRequestStatus(farmer._id);

          const farmerSlug = slugify(farmer.name || "", { lower: true, strict: true });

          return (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={farmer._id}>
              <div className="card shadow rounded-4 p-20 mx-auto" style={{ maxWidth: '22rem', backgroundColor: '#fff' }}>
                <div className="d-flex flex-column align-items-center">
                  <img
                    src={`${process.env.REACT_APP_BASE_URL_PRIMARY}/${farmer.profileImg}` || "https://avatar.iran.liara.run/public/boy"}
                    alt={farmer.name}
                    className="rounded-circle object-fit-cover"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                  <Link to={`/farmer/${farmerSlug}-${farmer._id}`}>
                    <h1 className="mt-4 text-center text-uppercase fw-bold" style={{ color: '#5a6a3f', fontSize: '20px' }}>
                      {farmer.name}
                    </h1>
                  </Link>
                  <h2 className="text-center fw-semibold mt-1 mb-0" style={{ color: '#305CDE', fontSize: '16px' }}>
                    <FaCheckCircle /> {farmer.isKYCVerified ? "Verified" : "UnVerified"}
                  </h2>
                  <p className="text-center mt-3 text-dark" style={{ maxWidth: '280px' }}>
                    {farmer.city_district || "N/A"}
                  </p>

                  <hr className="w-100 mt-4" />

                  {/* Button Logic */}
                  {status === 'pending' ? (
                    <button type="button" className="btn btn-warning rounded-pill" disabled>
                      Pending
                    </button>
                  ) : status === 'accepted' ? (
                    <button type="button" className="btn btn-success rounded-pill" disabled>
                      Accepted
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-main rounded-pill"
                      onClick={() => handleSendRequest(farmer._id)}
                    >
                      Adopt as Family Farmer
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FarmersSection;
