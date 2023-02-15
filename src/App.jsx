import React from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Hero from "./components/Hero";
import ImageSection from "./components/ImageSection";
import Footer from "./components/Footer";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
const url = import.meta.env.VITE_REACT_APP_URL;
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const [dark , setDark] = React.useState(false);
  const [imageArray, setImageArray] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState();
  const [count, setCount] = React.useState(0);
  const [pageNumber, setPageNumber] = React.useState(1);

  React.useEffect(() => {
    fetch(`${url}?client_id=${apiKey}&w=500&h=500&fm=jpg`)
      .then((res) => res.json())
      .then((data) => {
        setImageArray(data);
      });
  }, []);

  function modeChanger(){
    setDark(prevMode=>!prevMode)
  }

  function openPopUp(){
    setOpen(true)
  }

  function closePopUp(){
    setOpen(false)
  }

  function searchImages() {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${search}&page=1&w=500&h=500&fm=jpg`
    )
      .then((res) => {res.json()})
      .then((data) => {
        setImageArray(data.results);
      });
  }

  function moreImages() {
    console.log(" i am more")
    fetch(
      `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${search}&page=${pageNumber}&w=500&h=500&fm=jpg`
    )
      .then((res) => {res.json()})
      .then((data) => imageArray.push(...data.results));
    setPageNumber((prevNumber) => prevNumber + 1);
  }

  function handleClick(){
    setCount((prev) => prev + 1);
    search!==undefined?searchImages():openPopUp();
  }

  function handleChange(event) {
    setSearch(event.target.value.trim());
  }

  return (
    <div className={dark?"App darkMode":"App"}>
      <Container sx={{p:4 , display:'flex', justifyContent:'center',alignItems:'center'}}>
      <IconButton onClick={modeChanger}>
        {dark?<Brightness4Icon sx={{color:'grey'}} />:<Brightness7Icon/>}
      </IconButton>
      </Container>
      <Hero buttonClick={handleClick} inputChange={handleChange} />
      <ImageSection imageArray={imageArray} />
      <Container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {count>0?<Button sx={{ my: 5 }} onClick={moreImages}>
          More
        </Button>:null}
      </Container>
      <Snackbar open={open} autoHideDuration={2000} onClose={closePopUp}>
        <Alert onClose={closePopUp} severity="error" sx={{ width: '100%' }}>
          Please type in search box
        </Alert>
      </Snackbar>
      <Footer />
    </div>
  );
}

export default App;
