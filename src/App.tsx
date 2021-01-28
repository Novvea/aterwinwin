import './shared/css/Global.css'
import { DesktopNavigation } from './components/navigation/desktopnavigation/DesktopNavigation'
import { Routes } from './routes/Routes'

function App() {
  return (
    <Routes>
        <DesktopNavigation/>
    </Routes>
  );
}

export default App;
