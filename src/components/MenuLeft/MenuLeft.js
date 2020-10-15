import React from 'react'
import {
  IoIosColorPalette as ColorPalette,
  IoIosMusicalNotes as MusicalNotes,
  IoIosRefreshCircle as Recent,
  IoIosHeart as Heart,
  IoIosList as Playlist,
  IoIosSettings as Settings,
} from 'react-icons/io'
import { Link } from 'react-router-dom'

const MenuLeft = () => (
  <aside className="menu-left">
    <nav>
      <span>
        <Link to="/">
          <MusicalNotes />
          Home
        </Link>
      </span>
      <span>
        <Link to="/favorite">
          <Heart />
          Favorites
        </Link>
      </span>
      <span>
        <Link to="/recent">
          <Recent />
          Recent
        </Link>
      </span>
      <span>
        <Link to="/playlist">
          <Playlist />
          Playlist
        </Link>
      </span>
      <span>
        <Link to="/settings">
          <Settings />
          Settings
        </Link>
      </span>
      <span>
        <Link to="/themes">
          <ColorPalette />
          Themes
        </Link>
      </span>
    </nav>
  </aside>
)

export default MenuLeft
