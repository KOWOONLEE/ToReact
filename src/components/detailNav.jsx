import styled from "styled-components";
import { BsMap, BsBuildingGear, BsPeople, BsShieldLock } from "react-icons/bs";
import { BiMap, BiLineChart, BiDevices } from "react-icons/bi";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";

const DetailNav = () => {
  return (
    <StyledDetailNav>
      <div className="navWrap">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link
            href="/"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="메인페이지"
          >
            <BsMap />
          </Nav.Link>
          <Nav.Link
            href="/"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="등록기관 정보"
          >
            <BsBuildingGear />
          </Nav.Link>
          <Nav.Link
            href="/"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="사용자정보"
          >
            <BsPeople />
          </Nav.Link>
          <Nav.Link
            href="/"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="비상상황 정보"
          >
            <BiMap />
          </Nav.Link>
          <Nav.Link
            href="/"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="디바이스 정보"
          >
            <BiDevices />
          </Nav.Link>
          <Nav.Link
            href="/"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="차트 정보"
          >
            <BiLineChart />
          </Nav.Link>
          <Nav.Link
            href="/"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="사물위치 정보 수립사실"
          >
            <BsShieldLock />
          </Nav.Link>
        </Nav>
      </div>
    </StyledDetailNav>
  );
};

export default DetailNav;

const StyledDetailNav = styled.div`
  display: flex;
  width: 56px;
  height: 100%;
  border: 1px solid grey;
  align-items: center;
  justify-content: center;
`;
