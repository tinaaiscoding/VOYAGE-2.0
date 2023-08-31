import Main from './Main';
import AddDestination from './AddDestination/AddDestination';
import Search from './Search/Search';
import PopularDestinations from './PopularDestinations/PopularDestinations';
import Categories from './Categories/Categories';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <div id="Home">
      <Main />
      <AddDestination />
      <Search />
      <PopularDestinations />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
