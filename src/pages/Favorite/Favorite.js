import React from 'react'

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

export default Favorite
