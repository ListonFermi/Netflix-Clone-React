import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'

function App() {

  const rows = [
    { rowTitle: 'Trending Now', tag: 'trending' },
    { rowTitle: 'Action', tag: 'action' },
    { rowTitle: 'Originals', tag: 'originals' },
    { rowTitle: 'Comedy', tag: 'comedy' },
    { rowTitle: 'Horror', tag: 'horror' },
    { rowTitle: 'Romance', tag: 'romanceMovies' },
    { rowTitle: 'Documentaries', tag: 'documentaries' },
  ] 

  return (
      <>
        <Navbar />
        <Banner />
        {rows.map(row => <RowPost rowTitle={row.rowTitle} tag={row.tag} />)}
      </>
  )
}

export default App
