import React from 'react';
import './FeaturedMovie.css';

export default ({item}) => {
    console.log(item)

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres){
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if(description.length > 200){
        description = description.substring(0, 200)+'...'
    }
    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vert">
                <div className="featured--hori">
                    <div className ="featured--name">
                        {item.original_name}
                    </div>
                    <div className="featured--info">
                        <div className="featured--point">
                            {item.vote_average} pontos
                        </div>
                        <div className="featured--year">
                            {firstDate.getFullYear()}
                        </div>
                        <div className="featured--seasons">
                            {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : '' }
                        </div>
                    </div>
                    <div className="featured--desc">
                        {description}
                    </div>
                    <div className="featured--btns">
                    <a href="" className="watch--btn"> ► Assitir </a>
                    <a href="" className="add--list--btn"> + minha lista </a>
                    <a href="" ></a>

                    </div>
                    <div className="featured--genres">
                        Gêneros: {genres.join(', ')}
                    </div>
                </div>
            </div>
        </section>
    );
}