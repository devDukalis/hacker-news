# Hacker News

Develop an interface for the site [Hacker News](https://news.ycombinator.com/news), consisting of two pages.

## Product requirements

### Home page

- Shows the latest 100 news in a list sorted by date, the most recent on top.
- Each news item contains:
  - name
- rating
- author's nickname
- date of publication
- Clicking on the news takes you to the news page
- The news list should be automatically updated once a minute without user involvement
- There should be a button on the page to force the update of the news list

### News page

Must contain:

- a link to the news
  - news title
- date
  - the author
  - counter for the number of comments
  - a list of comments in the form of a tree
- Root comments are loaded immediately upon entering the page, nested comments are loaded by clicking on the root one.
- The list of comments should be automatically updated once a minute without user involvement
- There should be a button on the page to force updating the list of comments
- There should be a button on the page to return to the news list

## Technical requirements

- The application is developed using React and Redux
- Used [official Hacker News API](https://github.com/HackerNews/API)
- Routing is performed using [React Router v6](https://reactrouter.com/en/main)
- Any UI framework
- Package manager `npm`
- After launching the application, all link clicks do not reload the page
