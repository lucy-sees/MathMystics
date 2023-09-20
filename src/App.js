import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Calc from './components/calculator/Calculator';
import Home from './components/home/Home';
import Quote from './components/quotes/quotes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/calculator" element={<Calc />} />
    </Routes>
  );
}

export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//   }

//   render() {
//     return (
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/quote" element={<Quote />} />
//         <Route path="/calculator" element={<Calc />} />
//       </Routes>
//     );
//   }
// }
