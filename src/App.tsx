import Root from './pages/Root/Root';
import About from './pages/About/About';
import Router from './Router/Router';

const App = () => {
  return (
    <div className="App">
      <Router path="/" element={<Root />}></Router>
      <Router path="/about" element={<About />}></Router>
    </div>
  );
};

export default App;
