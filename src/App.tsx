import CookieConsent from "./CookieConsent"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from "./fake.json"
function App() {
  return (
    <div className="App">
      <CookieConsent cookies={data} />
    </div>
  );
}

export default App;
