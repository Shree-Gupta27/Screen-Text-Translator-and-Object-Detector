// import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import WorkingBox from "./WorkingBox";
import FlowChart from "../assets/FlowChart.png";
// import { SearchBar } from "./";

const WorkingContainer = () => (
  <div className="working-container">
    <div className="heading-container text-[3.5rem]">Working</div>
    <div className="working-box-container">
      <img src={FlowChart} alt="" />
    </div>
  </div>
);

export default WorkingContainer;
