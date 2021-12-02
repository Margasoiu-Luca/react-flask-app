import _ from 'lodash'
import faker from 'faker'
import React from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import api_key from '../api_key'
import { useNavigate, BrowserRouter } from "react-router-dom";


//Initial state 
//loading - controls a spinner on the right 
//results - when set a value, creates selectable components below the search bar

const initialState = {
  loading: false,
  results: [],
  value: '',
}


//This reducer  
function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }

    default:
      throw new Error()
  }
}

function SearchBar() {
  const navigate = useNavigate()
  //The reducer function is simillar to the useState hook as it sets a default function and a reducer which is called through the second element of the deconstructed arrayy 
  //This is important because the search bar from semantic ui uses a specific set of queries in order to work
  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  //References to the state that are used to output the value
  //Optional but helpful as to not access the state every time
  const { loading, results, value } = state

  const timeoutRef = React.useRef()
  const handleSearchChange = React.useCallback(async (e, data) => {
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })


    timeoutRef.current = setTimeout(async() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }
      //Search the movie database api with the current value inputted in the search bar and in the same line jsonify the data
      let apiSearch = await (await fetch(`
      https://api.themoviedb.org/3/search/movie?api_key=d0110b617d68ddb4f3c453cbdf800606&language=en-US&query=${data.value}&page=1&include_adult=false`)).json()
      //from that, select the results aka the movies
      apiSearch = apiSearch['results']
      //create a temporary array wich stores information about movies
      let moviesInfo=[]
      for(let i=  0; i<5; i++){
        //Spread operator tells js here to add to this array the previous values as well as the new one
        moviesInfo=[...moviesInfo, {
          'key':apiSearch[i]['id'],
          'description':apiSearch[i]['overview'].substr(0,apiSearch[i]['overview'].indexOf('.')+1),
          'image':`https://image.tmdb.org/t/p/original/${apiSearch[i]['poster_path']}`,
          'title':apiSearch[i]['title'],
          'href':`/movie/${apiSearch[i]['id']}`
        }]
      }
      console.log(moviesInfo)

      // const re = new RegExp(_.escapeRegExp(data.value), 'i')
      // const isMatch = (result) => re.test(result.title)
      
      //on this dispatch, the results are set, therefore they will be shown to the user
      dispatch({
        type: 'FINISH_SEARCH',
        results: moviesInfo,
      })
    }, 300)
  }, [])

  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <Grid>
      <Grid.Column width={6}>
        <Search
          loading={loading}
          onResultSelect={(e, data) =>
            console.log(data.result)
            // navigate(`/movie/${data.result.key}`)
          }
          onSearchChange={handleSearchChange}
          results={results}
          value={value}
        />
      </Grid.Column>
    </Grid>
  )
}

export default SearchBar
