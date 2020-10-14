import React from 'react'

const Theme = () => (
  <section className="theme">
    <div className="theme__header">
      <h1>theme played</h1>
      <input type="text" placeholder="search music" />
    </div>
    <div className="theme__clasification">
      <span className="theme__mode theme__mode--active">Songs</span>
    </div>
    <div className="theme__view-mode">
      <div className="iconm">Grid</div>
      <div className="theme__sort">
        sort by: <span className="theme__sort-active">Date added</span>
      </div>
    </div>
    <div className="theme__list">
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

export default Theme
