import { Button } from "@mui/material";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useTheme } from "../shared/contexts";

export const AppRoutes = () => {

  const {toggleTheme} = useTheme()

  return (
    <Routes>
      <Route path="/" element={ <Button variant="contained" color="primary" onClick={toggleTheme}>Teste</Button> } />
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
  );
}