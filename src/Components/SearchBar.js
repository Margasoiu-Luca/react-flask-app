import _ from 'lodash'
import faker from 'faker'
import React from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import api_key from '../api_key'
import { useNavigate, BrowserRouter } from "react-router-dom";



const initialState = {
  loading: false,
  results: [],
  value: '',
}



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
  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
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
      let apiSearch = await (await fetch(`
      https://api.themoviedb.org/3/search/movie?api_key=d0110b617d68ddb4f3c453cbdf800606&language=en-US&query=${data.value}&page=1&include_adult=false`)).json()
      console.log(apiSearch)
      apiSearch = apiSearch['results']
      console.log(apiSearch)
      let moviesInfo=[]
      for(let i=  0; i<5; i++){
        moviesInfo=[...moviesInfo, {
          'key':apiSearch[i]['id'],
          'description':apiSearch[i]['overview'],
          'image':`https://image.tmdb.org/t/p/original/${apiSearch[i]['poster_path']}`,
          'title':apiSearch[i]['title']
        }]
      }
      console.log(moviesInfo)

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.title)

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
            // console.log(data.result)
            navigate(`/movie/${data.result.key}`)
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
