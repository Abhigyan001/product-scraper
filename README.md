# Product Scraper

A full-stack web application that scrapes product details from e-commerce sites and displays them in a user-friendly interface. Built with **Ruby on Rails** for the backend and **React.js** for the frontend, the app allows users to submit product URLs, store the scraped data in a database, and view products categorized by type.

## Features
- **Web Scraping**: Extract product details (title, price, category) from given URLs.
- **Database Storage**: Store scraped products in a relational database.
- **Product Listing**: View products grouped by category.
- **Auto-Update**: Refresh product data if older than one week.
- **Search & Filter**: Asynchronous search and filtering functionality.

## Tech Stack
### **Backend** (Ruby on Rails)
- Ruby on Rails 7
- SQLite3 (Development) / PostgreSQL (Production)
- Nokogiri (for web scraping)
- Sidekiq & Redis (for background jobs)
- RSpec, FactoryBot, Capybara (for testing)

### **Frontend** (React.js)
- React 18
- Axios (for API requests)
- Bootstrap (for styling)
- Jest & React Testing Library (for testing)

## Installation & Setup

### **1. Clone the Repository**
```sh
git clone https://github.com/your-username/product-scraper.git
cd product-scraper
```

### **2. Backend Setup**
```sh
cd backend  # Navigate to backend directory
bundle install  # Install Ruby gems
rails db:create db:migrate db:seed  # Setup database
rails server  # Start Rails server
```

### **3. Frontend Setup**
```sh
cd ../frontend  # Navigate to frontend directory
npm install  # Install dependencies
npm start  # Start React development server
```

### **4. Running Tests**
#### **Backend Tests**
```sh
cd backend  # Go to backend
rspec  # Run RSpec tests
```

#### **Frontend Tests**
```sh
cd frontend  # Go to frontend
npm test  # Run Jest tests
```

## API Endpoints
| Method | Endpoint | Description |
|--------|------------|-------------|
| `POST` | `/api/v1/scrape` | Scrape product details from a URL |
| `GET` | `/api/v1/products` | Retrieve all scraped products, grouped by category |
| `PUT` | `/api/v1/products/:id` | Update product details |
| `DELETE` | `/api/v1/products/:id` | Delete a product |

## Troubleshooting
- If you get **CORS errors**, ensure the Rails server allows requests from `http://localhost:3001`.
- If the database doesn't exist, run `rails db:create db:migrate`.
- For missing dependencies, run `bundle install` (backend) or `npm install` (frontend).

## License
This project is licensed under the MIT License.

## Contributors
- **Abhigyan** - [GitHub Profile](https://github.com/Abhigyan001)

