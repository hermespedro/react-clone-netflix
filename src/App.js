import React,  {useEffect, useState} from 'react';
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

import './App.css'
import Header from './components/Header';


export default () => {

  const [ movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    const loadAll = async function() {

      // pegando a lista total  
      let list = await Tmdb.getHomeList();

      setMovieList(list)
      //  pegando o featured
      let originals = list.filter(item => item.slug ==='originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }
    loadAll();
  }, []);
  
  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10 ) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);
  
  return (
    <div className="page">
      
      <Header black={blackHeader}/>
      {
        // Só mostra os dados se eles existirem, para evitar de vir vazio  
        featuredData && <FeaturedMovie item={featuredData}/>
      }
      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      <footer>
        <small>Clone do Netflix feito com React.JS</small><br/>
        <small>Direitos de imagens Netflix</small><br/>
        <small>Produzido consumindo api de dados do themoviedb.org </small>
      </footer>
    </div>
  )
}