import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { getTours } from "../redux/actions/tourActions";
import { setCurrentPage } from "../redux/features/tourSlice";
import CardTour from "../components/CardTour";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
import { useLocation } from "react-router-dom";
import NewFeed from "../components/NewFeed";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const { tours, loading, currentPage, numberOfPages } = useSelector(
    (state) => ({
      ...state.tour,
    })
  );
  const dispatch = useDispatch();
  const query = useQuery();
  const searchQuery = query.get("searchQuery");
  const location = useLocation();

  useEffect(() => {
    dispatch(getTours(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <MDBContainer className="pt-5">
      <MDBRow className="mt-5">
        {tours.length === 0 && location.pathname === "/" && (
          <MDBTypography className="text-center mb-0" tag="h2">
            No Tours Found
          </MDBTypography>
        )}

        {tours.length === 0 && location.pathname !== "/" && (
          <MDBTypography className="text-center mb-0" tag="h2">
            We couldn't find any matches for "{searchQuery}"
          </MDBTypography>
        )}
   {tours.length > 0 && location.pathname === "/" && (
              <MDBRow className="g-2">
          <MDBCol size="12" lg="10" xl="8">
            <MDBRow>
              {tours &&
                tours.map((item) => <CardTour key={item._id} {...item} />)}
            </MDBRow>
          </MDBCol>
          <MDBCol size="12" lg="2" xl="4">
            {tours.length > 0 && location.pathname === "/" && (
              <h3 className="me-auto">News Feed</h3>
            )}
            <div className="mt-2">
              {tours &&
                tours
                  .map((item) => <NewFeed key={item._id} {...item} />)
                  .reverse()
                  .splice(0, 4)}
            </div>
          </MDBCol>
        </MDBRow>
            )}
            
        {tours.length > 0 && location.pathname !== "/" && (
             <MDBRow className="g-2">
             <MDBCol size="12">
               <MDBRow>
                 {tours &&
                   tours.map((item) => <CardTour key={item._id} {...item} />)}
               </MDBRow>
             </MDBCol>
           
           </MDBRow>
        )}
       
      </MDBRow>
      {tours.length > 0 && !searchQuery && (
        <Pagination
          setCurrentPage={setCurrentPage}
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          dispatch={dispatch}
        />
      )}
    </MDBContainer>
  );
};

export default Home;
