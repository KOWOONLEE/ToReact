import styled from "styled-components";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.css";
import Button from "@mui/material/Button";
import { theme } from "../color";
const DeviceDb = () => {
  return (
    <StyledDeviceDb>
      <div className="contentWrap">
        <div className="titleWrap">
          <h3>title</h3>
        </div>
        <div>
          <Button variant="contained">Hello World</Button>
        </div>
        <div className="tableWrap">
          <Table striped bordered hover size="sm">
            <thead>
              <tr className="tableTitle">
                <th scope="col"></th>
                <th scope="col">등록기관ID</th>
                <th scope="col">주소</th>
                <th scope="col">전화번호</th>
                <th scope="col">인원수</th>
                <th scope="col">지원 서비스 모델</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              <tr>
                <td></td>
                <td>서버관리자-P</td>
                <td>경기도 용인시</td>
                <td>0318935157</td>
                <td>200</td>
                <td>P</td>
              </tr>
              <tr>
                <td></td>
                <td>서버관리자-D</td>
                <td>경기도 용인시</td>
                <td>0318935157</td>
                <td>200</td>
                <td>D</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </StyledDeviceDb>
  );
};
export default DeviceDb;

const StyledDeviceDb = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${theme.point};
  background-color: ${theme.bg};
  padding: 10px;
  .titleWrap {
    width: 100%;
    padding: 0 30px;
  }
  .tableWrap {
    display: flex;
    width: 100%;
    background-color: ${theme.bg};
    padding: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;

    table {
      width: 90%;
    }
  }
  .tableTitle {
    background-color: white;
  }
  .tableBody {
    background-color: white;
  }
`;
