import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import AuthPage from "../Components/pages/AuthPage";
import LandingPage from "../Components/LandingPage";
import CandidateApplications from "../Components/pages/candidate/CandidateApplications";
import CandidateConversation from "../Components/pages/candidate/CandidateConversation";
import CandidateJobs from "../Components/pages/candidate/CandidateJobs";
import CandidateOnboarding from "../Components/pages/candidate/candidateOnboarding/index";
import CandidateProfile from "../Components/pages/candidate/CandidateProfile";
import EmployerApplications from "../Components/pages/employer/EmployerApplications";
import EmployerConversations from "../Components/pages/employer/EmployerConversations";
import EmployerJobs from "../Components/pages/employer/EmployerJobs";
import EmployerOnboarding from "../Components/pages/employer/employerOnboarding/index";
import EmployerProfile from "../Components/pages/employer/employerProfile/index";
import CandidateHoc from "../HOC/CandidateHoc";
import EmployerHoc from "../HOC/EmployerHoc";
//  import setDoc , getDoc, db from firebase
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/index";

function Navs() {
  // const[temp, setTemp] = useState( {});
  // let user = JSON.parse(localStorage.getItem("user"));
  // let uid = user.uid;
  // let docRef = doc(db, "userInfo", uid);
  // getDoc(docRef).then((doc_) => {
  //   const data = doc_.data();
  //   // setTemp(data);
  //   // console.log( data );
  // });
  // console.log( temp);
  // let userType =    temp.type;
  const ProtectedCandidateRoute = () => {
    // if (userType === "candidate") {
    if (true) {

      return <Outlet />;
    } else {
      return <Navigate to="./candidate/auth" />;
    }
  };
  const ProtectedEmployerRoute = () => {
    // if (userType === "employer") {
    if (true)  {

      return <Outlet />;
    } else {
      return <Navigate to="./employer/auth" />;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path='/auth' element={<AuthPage />} /> */}
        {/* candidate route */}
        <Route path="/candidate/auth" element={<AuthPage type="candidate" />} />

        {/* we dont want user to access the Candidate profile, Candidate jobs,Candidate application and Candidate conversations section without login */}
        {/* to achieve this functionality we are going to use   PROTECTED ROUTE */}
        <Route element={<ProtectedCandidateRoute />}>
          <Route
            path="/candidate/onboarding"
            element={<CandidateOnboarding />}
          />
          <Route
            path="/candidate/profile"
            element={
              <CandidateHoc>
                <CandidateProfile />
              </CandidateHoc>
            }
          />
          <Route
            path="/candidate/jobs"
            element={
              <CandidateHoc>
                <CandidateJobs />
              </CandidateHoc>
            }
          />
          <Route
            path="/candidate/applications"
            element={
              <CandidateHoc>
                <CandidateApplications />
              </CandidateHoc>
            }
          />
          <Route
            path="/candidate/conversations"
            element={
              <CandidateHoc>
                <CandidateConversation />
              </CandidateHoc>
            }
          />
        </Route>

        {/* employer route */}
        <Route path="/employer/auth" element={<AuthPage type="employer" />} />

        {/* we dont want user to access the employer profile, employer   jobs,employer application and employer conversations section without login */}
        {/* to achieve this functionality we are going to use   PROTECTED ROUTE */}

        <Route element={<ProtectedEmployerRoute />}>
          <Route path="/employer/onboarding" element={<EmployerOnboarding />} />

          <Route
            path="/employer/profile"
            element={
              <EmployerHoc>
                {" "}
                <EmployerProfile />{" "}
              </EmployerHoc>
            }
          />
          <Route
            path="/employer/jobs"
            element={
              <EmployerHoc>
                <EmployerJobs />
              </EmployerHoc>
            }
          />
          <Route
            path="/employer/applications"
            element={
              <EmployerHoc>
                <EmployerApplications />
              </EmployerHoc>
            }
          />
          <Route
            path="/employer/conversations"
            element={
              <EmployerHoc>
                <EmployerConversations />
              </EmployerHoc>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default Navs;
