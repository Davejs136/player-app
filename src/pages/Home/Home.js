import React from 'react'
import data from '../../music.json'

const Home = () => (
  <section className="home">
    <div className="home__header">
      <h1>My Music</h1>
      <input type="text" placeholder="search music" />
    </div>
    <div className="home__clasification">
      <span className="home__mode home__mode--active">Songs</span>
    </div>
    <div className="home__view-mode">
      <div className="iconm">Grid</div>
      <div className="home__sort">
        sort by: <span className="home__sort-active">Date added</span>
      </div>
    </div>
    <div className="home__list">
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h2> {item.name} - <span>{item.id}</span> </h2><br/>
            <p>path: {item.path}</p><br/>
            <p>Is favorite: {item.favorite}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default Home
