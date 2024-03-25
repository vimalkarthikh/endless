import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import EndlessScrollingPage from './EndlessScrollingPage'
import ElementTransfer from './ElementTransfer'
import KeywordGame from './KeywordGame'
import NestedList from './NestedList'

export function App() {

  return (
    <BrowserRouter>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">InfiniteScroll</Link>
            </li>
            <li>
              <Link to="/elementtransfer">Element Transfer</Link>
            </li>
            <li>
              <Link to="/keywordgame">Keyword Game</Link>
            </li>
            <li>
              <Link to="/nestedlist">Nested List</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<EndlessScrollingPage />} />
          <Route path="/elementtransfer" element={<ElementTransfer />} />
          <Route path="/keywordgame" element={<KeywordGame />} />
          <Route path="/nestedlist" element={<NestedList />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
