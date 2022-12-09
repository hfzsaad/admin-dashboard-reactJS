import { Box } from "@mui/material";
import GeographyChart from "../../components/GeographyChart/GeographyChart";
import Header from "../../components/Header/Header";

export default function GeographyChartScreen () {
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
}