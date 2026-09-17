# YouTube Clone

A responsive clone of the YouTube home page, built from scratch with plain **HTML**, **CSS**, and **vanilla JavaScript** — no frameworks, no build step, no dependencies.

The goal of this project is to rebuild a real, complex UI pixel by pixel and make every part of it actually work: the menus open, the theme switches and persists, the category chips scroll, and the whole layout adapts from desktop down to phone.

## Demo

<!-- Add a screen recording of the site here -->

## Screenshots

<!-- Add screenshots of the site here (light theme / dark theme / mobile) -->

## Features

- **Header** — YouTube logo, search bar with search and voice-search buttons, and tooltips on hover.
- **Create menu** — click the `+ Create` button to open a menu with *Upload video*, *Go live*, and *Create post*. Closes on outside click or `Escape`.
- **Account menu** — click the avatar to open the full account menu (channel, Studio, switch account, sign out, purchases, data, language, restricted mode, location, keyboard shortcuts, settings, help, feedback).
- **Light / dark theme** — an *Appearance* submenu inside the account menu with three options: **Device theme**, **Dark theme**, **Light theme**. The choice is saved in `localStorage`, and *Device theme* follows the operating system via `prefers-color-scheme`.
- **Sidebar** — a mini icon rail plus a full guide (Home, Shorts, Subscriptions, You, History, Playlists, Watch later, Liked videos, Explore, More from YouTube, Settings…). The hamburger button toggles between them, and `Escape` closes it.
- **Category chips** — a horizontally scrollable row with left/right arrows that appear and disappear at the edges, a fade effect on the overflowing side, and a clickable active state.
- **Video grid** — video cards with thumbnail, duration, channel avatar, title, channel name, and view/time metadata.
- **Shorts row** — a dedicated Shorts section with its own vertical-format cards.
- **Responsive design** — the grid reflows at 4 breakpoints (`>1125px`, `870–1125px`, `601–869px`, `≤600px`) so it stays usable on tablets and phones.

## Tech Stack

| Layer | What is used |
|---|---|
| Markup | Semantic HTML5 |
| Styling | CSS3 — Flexbox, Grid, CSS variables, media queries |
| Behaviour | Vanilla JavaScript (ES6), DOM API, `localStorage`, `matchMedia` |
| Font | Roboto (Google Fonts) |
| Icons | Custom SVG icon set |

## Project Structure

```
YouTube-clone/
├── AmirHosseinBarzegar.html   # the whole page
├── css/
│   ├── general.css            # resets and shared rules
│   ├── header.css             # header, search, create menu, account menu
│   ├── sidebar.css            # mini rail + full guide
│   ├── chips.css              # category chips row
│   ├── body.css               # video grid and cards
│   ├── shorts.css             # shorts section
│   └── dark.css               # dark theme overrides
├── js/
│   ├── sidebar.js             # sidebar toggle
│   ├── chips.js               # chips scrolling, arrows, active chip
│   ├── create.js              # create menu
│   ├── profile.js             # account menu
│   └── theme.js               # theme switching + persistence
├── icons/                     # SVG / PNG icons
├── thumbnails/                # video thumbnails
└── channel-pictures/          # channel avatars
```

## Getting Started

No installation and no build tools are needed.

```bash
git clone https://github.com/amir-gilani/YouTube-clone.git
cd YouTube-clone
```

Then open `AmirHosseinBarzegar.html` in your browser — or, if you use VS Code, open it with the **Live Server** extension.

## Notes

This is a **front-end only** project. There is no backend, no API, and no video playback — the content is static and exists to reproduce the layout and interactions of the real site as closely as possible.

## Author

**Amir Hossein Barzegar**
GitHub: [@amir-gilani](https://github.com/amir-gilani)
