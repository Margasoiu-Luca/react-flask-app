import './App.css';
import {useState} from 'react' 
import 'semantic-ui-css/semantic.min.css'
import LoginForm from './Pages/LoginPage';
import { Container,Grid,Segment,Image, Search } from 'semantic-ui-react'
import Navbar from './Components/Navbar';
import MovieCarousel from './Components/MovieCarousel';
import MovieCard from './Components/MovieCard'
import FrontPage from './Pages/FrontPage';
import bestwatch from './images/bestwatch.png'
import SearchBar from './Components/SearchBar'
import CategoryPages from './Pages/CategoryPages';
import {BrowserRouter as Router,Switch, Route,Routes,Navigate } from 'react-router-dom'
import MovieCategoryList from './Components/MovieCategoryList'
import NotFound from './Pages/NotFound';
import GenrePage from './Pages/GenrePage';
import MovieDescPage from './Pages/MovieDescPage';
import PersonalPage from './Pages/PersonalPage';
import RegisterPage from './Pages/RegisterPage';
import Review from './Components/Review';

function App(){
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  //The main app
  //The purpose of this App component is to handle what screen to load depending on the url
  //The loading part is done with react-router by the usage of <Route>
  //Additionally, in the element parameter it can be seen that for many <Route> elements there is a ternary operator
  //This ternary operator checks if there is a 'token' item in the localStorage, and if there is one it means that
  //A user is logged in, and the normal route can be accessed. If this token doesn't exist, it means the user is not logged 
  //And is redirected to the /login route, which loads the LoginForm component
  return(
  <>
  {/* Navbar, container, and Image are all outside the routes
      this means that, they will generate first, regardless of the 
      route that is accessed */}
  <Navbar/>
    <Container>
        <Image centered style={{width:'1000px'}} src={bestwatch} />
        <Routes>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route exact path="/" element={localStorage.getItem('token')?<FrontPage/>:<Navigate to='/login'/>}/>
        <Route exact path="/category" element={localStorage.getItem('token')?<CategoryPages/>:<Navigate to='/login'/>}/>
        <Route path="/category/:id" element={localStorage.getItem('token')?<GenrePage/>:<Navigate to='/login'/>}/>
        <Route path="/movie/:id" element={localStorage.getItem('token')?<MovieDescPage/>:<Navigate to='/login'/>}/>
        <Route path="/personal" element={localStorage.getItem('token')?<PersonalPage/>:<Navigate to='/login'/>}/>
        {/* <Route path='/test' element={<Review/>}/> */}
        <Route exact path='/:id' element={<NotFound/>}/>
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
