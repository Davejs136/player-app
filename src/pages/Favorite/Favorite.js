import React from 'react'
import data from '../../music.json'

const Favorite = () => (
  <section className="fav">
    <div className="fav__header">
      <h1>My Favorite songs</h1>
      <input type="text" placeholder="search music" />
    </div>
    <div className="fav__clasification">
      <span className="fav__mode fav__mode--active">All</span>
    </div>
    <div className="fav__view-mode">
      <div className="iconm">Grid</div>
      <div className="fav__sort">
        sort by: <span className="fav__sort-active">Date added</span>
      </div>
    </div>
    <div className="fav__list">
      {data
        .filter(item => item.favorite)
        .map(item => (
          <li key={item.id}>
            <h2>
              {item.name} - <span>{item.id}</span>
            </h2>
            <br />
            <p>path: {item.path}</p>
            <br />
            <p>Is favorite: {String(item.favorite)}</p>
          </li>
        ))}
    </div>
  </section>
)

export default Favorite
