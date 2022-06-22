
import './App.css';
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="">
        <head>
            <title>INSL | 2022 | Web Portal</title>
            <style>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossOrigin="anonymous"
                />
            </style>
        </head>
      <Navbar />
        <Home />
    </div>
  );
}

export default App;
