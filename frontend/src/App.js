import "./App.css";
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import SingleNote from "./screens/SingleNote/SingleNote";
import CreateNote from "./screens/SingleNote/CreateNote";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
function App() {
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <Header setSearch={(s) => setSearch(s)} />
      <main className="App">
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/mynotes" element={<MyNotes search={search} />} />
          <Route path="/note/:id" component={SingleNote} />
          <Route path="/createnote" component={CreateNote} />;
          <Route path="/profile" component={ProfileScreen} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
