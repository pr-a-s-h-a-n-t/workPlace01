// import logo from './logo.svg';
import "./App.css";
import Navs from "./Navs";
import { UserContextProvider } from "./contex/UserContex";
import { DarkmodeContextProvider } from "./contex/DarkModeContex";
import { ReactNotifications } from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <div className="App">
      <DarkmodeContextProvider>
        <UserContextProvider>
          <ReactNotifications />
          <Navs />
        </UserContextProvider>
      </DarkmodeContextProvider>
    </div>
  );
}

export default App;
