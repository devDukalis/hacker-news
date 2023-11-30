# Hacker News

UI for the site [Hacker News](https://news.ycombinator.com/news), consisting of two pages

## Preview

Home page

![home](/src/resources/home.webp)

News page

![news](/src/resources/news.webp)

## Description

### Home page

- Shows the latest 100 news in a list sorted by date, the most recent on top
- Each news item contains:
  1. Title
  2. Rating
  3. Author's nickname
  4. Date of publication
- Clicking on the news takes you to the news page
- The news list should be automatically updated once a minute without user involvement
- There should be a button on the page to force the update of the news list

### News page

Must contain:

- A link to the news
- News title
- Date
- The author
- Counter for the number of comments
- A list of comments in the form of a tree
- Root comments are loaded immediately upon entering the page, nested comments are loaded by clicking on the root one.
- The list of comments should be automatically updated once a minute without user involvement
- There should be a button on the page to force updating the list of comments
- There should be a button on the page to return to the home

## Requirements

- Tools:
  - [React](https://react.dev)
  - [TypeScript](https://www.typescriptlang.org)
  - [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- Routing:
  - [React Router v6](https://reactrouter.com/en/main)
- UI library:
  - [Antd](https://ant.design)
- API:
  - [Hacker News API](https://github.com/HackerNews/API)
