import React from 'react'

const Recent = () => (
  <section className="recent">
    <div className="recent__header">
      <h1>Recent played</h1>
      <input type="text" placeholder="search music" />
    </div>
    <div className="recent__clasification">
      <span className="recent__mode recent__mode--active">Songs</span>
    </div>
    <div className="recent__view-mode">
      <div className="iconm">Grid</div>
      <div className="recent__sort">
        sort by: <span className="recent__sort-active">Date added</span>
      </div>
    </div>
    <div className="recent__list">
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

export default Recent
