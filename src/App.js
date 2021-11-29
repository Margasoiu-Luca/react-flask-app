import './App.css';
import {useState} from 'react' 
import 'semantic-ui-css/semantic.min.css'
import LoginForm from './Pages/LoginPage';
import { Container,Grid,Segment,Image, Search } from 'semantic-ui-react'
import Navbar from './Components/Navbar';
import MovieCarousel from './Components/MovieCarousel';
import MovieCard from './Components/MovieCard'
import FrontPage from './FrontPage';
import bestwatch from './bestwatch.png'
import SearchBar from './Components/SearchBar'
import CategoryPages from './CategoryPages';
import {BrowserRouter as Router,Switch, Route,Routes} from 'react-router-dom'
import MovieCategoryList from './Components/MovieCategoryList'
import NotFound from './NotFound';
import GenrePage from './Components/GenrePage';
import MovieDescPage from './MovieDescPage';
import PersonalPage from './Pages/PersonalPage';

const Users = () => {
  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
  ];

  return (
    <div className="users">
      {data.map((user) => (
        <div className="user">{user.id}</div>
      ))}
    </div>
  );
};


function App(){
  const [state, setstate] = useState()
  return(
  <>
  <Navbar/>
    <Container>
        <Image centered style={{width:'1000px'}} src={bestwatch} />
        <Routes>
        <Route exact path="/" element={<FrontPage/>}/>
        <Route exact path="/category" element={<CategoryPages/>}/>
        <Route path="/category/:id" element={<GenrePage/>}/>
        <Route path="/movie/:id" element={<MovieDescPage/>}/>
        <Route path="/personal" element={<PersonalPage/>}/>
      {/* <Route path="/notFound" element={<NotFound/>}/> */}
     </Routes>
    {/* <CategoryPages/> */}
    </Container>
    </>
  )
}


export default App;
//   <Container>
    
//   <Grid centered columns={2}>
//     <Grid.Column>
//       <Image src={bestwatch} />
//     </Grid.Column>
//     {/* <Grid columns={1} centered={true}>
//       <Grid.Column>
//       <img src={bestwatch} alt='Logo'/>
//       </Grid.Column> */}
//     </Grid>
//     <Segment inverted color={"yellow"}compact>Editors Picks</Segment>
//     <MovieCarousel style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}/>
//     <FrontPage/>
//   </Container>
// )
