import React from 'react'
import Navbar from './comonenet/Navbar';
import Home from './comonenet/Home';
import Search from './comonenet/Search';
import PlayingVideo from './comonenet/PlayingVideo';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from './context/AuthProvider';
import Loading from './loader/Loading';
function App() {
  const {loading}=useAuth()
  return (
    <div>
      {loading && <Loading/>}
      <Navbar />
      <Routes>
      <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
     
    </div>
  )
}

export default App;












// import React from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Search from './components/Search';
// import PlayingVideo from './components/PlayingVideo';
// import { Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" exact element={<Home />} />
//         <Route path="/search/:searchQuery" element={<Search />} />
//         <Route path="/video/:id" element={<PlayingVideo />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;









