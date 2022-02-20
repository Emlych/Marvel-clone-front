import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Comics from "./Pages/Comics";
import ComicsPerPerson from "./Pages/ComicsPerPerson";
import Characters from "./Pages/Characters";
import Favoris from "./Pages/Favoris";
import Modal from "./Components/Modal/Modal";
import Cookies from "js-cookie";

function App() {
  //Search comics or characters
  const [searchComic, setSearchComic] = useState("");
  const [searchCharacter, setSearchCharacter] = useState("");
  const handleSearchComic = (event) => {
    setSearchComic(event.target.value);
  };
  const handleSearchCharacter = (event) => {
    setSearchCharacter(event.target.value);
  };

  //handle authentication
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const setUser = (token) => {
    token
      ? Cookies.set("userToken", token, { expires: 3 })
      : Cookies.remove("userToken");
    setToken(token);
  };

  //Open modal
  const [signupModal, setSignupModal] = useState(false);
  //const [loginModal, setLoginModal] = useState(false);

  return (
    <div className="app">
      <Router>
        <Header
          searchComic={searchComic}
          handleSearchComic={handleSearchComic}
          searchCharacter={searchCharacter}
          setSearchCharacter={handleSearchCharacter}
          setSignupModal={setSignupModal}
          token={token}
        />
        {signupModal && (
          <Modal
            modalType="signup"
            setUser={setUser}
            setSignupModal={setSignupModal}
          />
        )}
        <Routes>
          <Route
            path="/comics"
            element={<Comics searchComic={searchComic} />}
          />
          <Route
            path="/characters"
            element={<Characters searchCharacter={searchCharacter} />}
          />
          <Route path="/characters/:id" element={<ComicsPerPerson />} />
          <Route path="/favoris" element={<Favoris />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
