import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

// @components
import Header from './components/Header/Index';
import Footer from './components/Footer/Index';

// @pages
import HomePage        from './pages/Home/Index';
import TalksPage       from './pages/Talks/Index';
import ArticlesPage    from './pages/Articles/Index';
import InvestmentsPage from './pages/Investments/Index';
import BooksPage       from './pages/Books/Index';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route exact path="/"      element={<HomePage />} />
          <Route path="/talks"       element={<TalksPage />} />
          <Route path="/articles"    element={<ArticlesPage />} />
          <Route path="/investments" element={<InvestmentsPage />} />
          <Route path="/books"       element={<BooksPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;