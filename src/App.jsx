import "./App.css";
import AuthProvider from "./context/AuthContext";
import Layouts from "./Layouts/Layouts";

function App() {
  return (
    <>
      <AuthProvider>
        <Layouts />
      </AuthProvider>
    </>
  );
}

export default App;
