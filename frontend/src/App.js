import "./App.css";
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
function App() {
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <Header setSearch={(s) => setSearch(s)} />
      <main className="App">
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/mynotes" element={<MyNotes search={search} />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
