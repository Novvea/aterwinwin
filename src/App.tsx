import "./shared/css/Global.css";
import { DesktopNavigation } from "./components/navigation/desktopnavigation/DesktopNavigation";
import { Routes } from "./routes/Routes";
import { UserProvider } from "./shared/provider/UserProvider";

function App() {
  return (
    <UserProvider>
      <Routes>
        <DesktopNavigation />
      </Routes>
    </UserProvider>
  );
}

export default App;
