import { Navigation } from "./components/Navigation/Navigation";
import GlobalStyle from './styles/global';
import DataNavigation from './mocks/DataNavigation';
import { Footer } from "./components/Footer/Footer";
export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navigation data = {DataNavigation}/>
      <Footer/>
    </div>
  );
}


