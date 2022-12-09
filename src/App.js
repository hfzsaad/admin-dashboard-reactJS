import { useState } from "react";
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider, CssBaseline} from '@mui/material';
import TopBar from './screens/global/TopBar/TopBar';
import { Route, Routes } from 'react-router-dom';
import SideBar from '../src/screens/global/SideBar/SideBar';
import DashboardScreen from './screens/Dashboard/DashboardScreen';
import TeamScreen from './screens/Team/TeamScreen';
import ContactsScreen from "./screens/Contacts/ContactsScreen";
import InvoicesScreen from "./screens/Invoices/InvoicesScreen";
import ProfileFormScreen from "./screens/ProfileForm/ProfileForm";
import CalendarScreen from "./screens/Calendar/CalendarScreen";
import FAQScreen from "./screens/FAQ/FAQScreen";
import BarChartScreen from "./screens/Bar/BarChartScreen";
import PieChartScreen from "./screens/Pie/PieChartScreen";
import LineChartScreen from "./screens/Line/LineChartScreen";
import GeographyChartScreen from "./screens/Geography/GeographyChartScreen";

export default function App() {

  const [theme, colorMode] = useMode(); 
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar isSidebar={isSidebar} />
          <main className="content">
            <TopBar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<DashboardScreen />} />
              <Route path="/team" element={<TeamScreen />} />
              <Route path="/contacts" element={<ContactsScreen />} />
              <Route path="/invoices" element={<InvoicesScreen />} />
              <Route path="/form" element={<ProfileFormScreen />} />
              <Route path="/calendar" element={<CalendarScreen />} />
              <Route path="/faq" element={<FAQScreen />} />
              <Route path="/bar" element={<BarChartScreen />} /> 
              <Route path="/pie" element={<PieChartScreen />} />
              <Route path="/line" element={<LineChartScreen />} />
              <Route path="/geography" element={<GeographyChartScreen />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
