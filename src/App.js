import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route
        exact
        path="/"
        element={<h2>Hello Welcome to Rails and React App!</h2>}
      />
      <Route path="/hello" element={<Greeting />} />
    </Routes>
  </Router>
);
export default App;
