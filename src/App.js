import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/Main";
import AgencyDb from "./pages/agencydb";
import Chart from "./pages/chart";
import DeviceDb from "./pages/devicedb";
import EmergencyDb from "./pages/emergencydb";
import LocalCollection from "./pages/locCollection";
import MemberDb from "./pages/memberdb";
import DetailNav from "./components/detailNav";

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        {/* <DetailNav /> */}
        <Routes>
          {/* <Route path="/arank/emergency" element={<AgencyDb />} />
          <Route path="/user/userInfo" element={<Chart />} />
          <Route path="/arank/device" element={<DeviceDb />} />
          <Route path="/" element={<DeviceDb />} />
          <Route path="/arank/agency" element={<EmergencyDb />} />
          <Route path="/arank/chart" element={<LocalCollection />} />
          <Route path="/arank/locCollection" element={<MemberDb />} /> */}
          <Route path="/" element={<Main />} />
        </Routes>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;

const StyledApp = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
