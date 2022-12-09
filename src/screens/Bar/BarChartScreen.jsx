import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import BarChart from "../../components/BarChart/BarChart";

export default function BarChartScreen () {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
}