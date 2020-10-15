import React from 'react'

const Settings = () => (
  <section className="settings">
    <div className="settings__header">
      <h1>settings played</h1>
      <input type="text" placeholder="search music" />
    </div>
    <div className="settings__clasification">
      <span className="settings__mode settings__mode--active">Songs</span>
    </div>
    <div className="settings__view-mode">
      <div className="iconm">Grid</div>
      <div className="settings__sort">
        sort by: <span className="settings__sort-active">Date added</span>
      </div>
    </div>
    <div className="settings__list">
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

export default Settings
