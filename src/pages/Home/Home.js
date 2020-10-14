import React from 'react'

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
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
        <li>List 4</li>
        <li>List 5</li>
      </ul>
    </div>
  </section>
)

export default Home
