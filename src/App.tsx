import Root from './pages/Root/Root';
import About from './pages/About/About';
import Router from './Router/Router';
import BrowserRouter from './Router/BrowserRouter';

const App = () => {
  return (
    <BrowserRouter>
      <Router to="/" element={<Root />} />
      <Router to="/about" element={<About />} />
    </BrowserRouter>
  );
};

export default App;
