# NewsWeb Application

NewsWeb is a responsive web application that fetches and displays the latest news articles using the NewsAPI. The application is built with React and features infinite scrolling, category-based filtering, and dark/light mode toggle.

## Features

- **Infinite Scrolling**: Automatically load more news articles as you scroll down.
- **Category Filtering**: View news articles by categories such as Business, Entertainment, Health, Science, Sports, and Technology.
- **Dark/Light Mode**: Toggle between dark and light themes for better readability.
- **Responsive Design**: Optimized for various screen sizes including desktops, tablets, and mobile devices.

## Installation

To get started with the NewsWeb application, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/touseef0707/NewsWeb.git
    ```

2. **Navigate to the project directory**:
    ```sh
    cd NewsWeb
    ```

3. **Install dependencies**:
    ```sh
    npm install
    ```

4. **Set up your NewsAPI key**:
    - Create a `.env` file in the root of your project.
    - Add your NewsAPI key to the `.env` file:
      ```plaintext
      REACT_APP_NEWS_API=your_news_api_key
      ```

5. **Start the development server**:
    ```sh
    npm start
    ```

6. **Open your browser**:
    - Visit `http://localhost:3000` to view the application.

## Usage

### Changing the Default Settings
- **Default Country**: To change the default country from 'in' (India) to another country, modify the `defaultProps` in the `News` component.
- **Default Page Size**: Modify the `pageSize` state in the `App` component to change the number of articles per page.

### Available Routes
- `/` or `/NewsWeb` - General news
- `/business` - Business news
- `/entertainment` - Entertainment news
- `/general` - General news
- `/health` - Health news
- `/science` - Science news
- `/sports` - Sports news
- `/technology` - Technology news

## Components

### `App`
The main component that sets up routing and the theme for the application.

### `Navbar`
The navigation bar component that includes the dark/light mode toggle.

### `News`
The component responsible for fetching and displaying news articles based on the selected category.

### `NewsItem`
The component that displays an individual news article.

### `Spinner`
The loading spinner component shown while fetching news articles.

## Contributing

Contributions are welcome! To contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [NewsAPI](https://newsapi.org/) for providing the news data.
- [React](https://reactjs.org/) for the powerful UI library.

---

