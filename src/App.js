import "./App.scss";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { LoggedNavigation } from "./routes/LoggedNavigation";
import { Auth } from "./pages";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);
  });

  if (currentUser === undefined) return null;
  return currentUser ? <LoggedNavigation /> : <Auth />;
}

export default App;
