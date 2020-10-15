import React from 'react'

const Playlist = () => (
  <section className="playlist">
    <div className="playlist__header">
      <h1>playlist played</h1>
      <input type="text" placeholder="search music" />
    </div>
    <div className="playlist__clasification">
      <span className="playlist__mode playlist__mode--active">Songs</span>
    </div>
    <div className="playlist__view-mode">
      <div className="iconm">Grid</div>
      <div className="playlist__sort">
        sort by: <span className="playlist__sort-active">Date added</span>
      </div>
    </div>
    <div className="playlist__list">
      <p>There is not a playlist yet</p>
    </div>
  </section>
)

export default Playlist
