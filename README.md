
# Wikipedia Search App

A simple, responsive web application that allows users to search Wikipedia articles and view results dynamically using the [CCBP Wikipedia Search API](https://apis.ccbp.in/wiki-search).

## 🚀 Features

* Responsive UI with Bootstrap 4
* Search Wikipedia articles by keyword
* Live API integration with loading spinner
* Clickable titles and links open in new tabs
* Clean, user-friendly interface

## 📁 Project Structure

```plaintext
.
├── index.html        # Main HTML file
├── styles.css        # CSS styling
└── script.js         # JavaScript logic for API interaction and DOM updates
```

## 🛠️ How It Works

1. User enters a keyword and presses Enter.
2. The app fetches relevant Wikipedia articles from the API.
3. Results are displayed dynamically, showing:

   * Title (clickable)
   * URL (clickable)
   * Short description

## 🔧 Technologies Used

* HTML5
* CSS3 (with Google Fonts)
* Bootstrap 4
* JavaScript (Vanilla)
* Wikipedia API via CCBP

## 📦 Installation

1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Start searching!

## 🌐 API Reference

* **Endpoint**: `https://apis.ccbp.in/wiki-search?search=<keyword>`
* **Method**: `GET`
* **Response**:

  ```json
  {
    "search_results": [
      {
        "title": "Example Title",
        "link": "https://en.wikipedia.org/wiki/Example",
        "description": "Brief description"
      }
    ]
  }
  ```


## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
