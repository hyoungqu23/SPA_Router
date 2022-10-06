import Root from './pages/Root/Root';
import About from './pages/About/About';
import Router from './Router/Router';
import BrowserRouter from './Router/BrowserRouter';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Router to="/" element={<Root />} />
        <Router to="/about" element={<About />} />
      </BrowserRouter>
    </div>
  );
};

export default App;
