# Product Scraper
A full-stack web application that scrapes product details from e-commerce sites and displays them in a user-friendly interface. Built with **Ruby on Rails** for the backend and **React.js** for the frontend, the app allows users to submit product URLs, store the scraped data in a database, and view products categorized by type.

## Features
- **Web Scraping**: Extract product details (title, price, category) from given URLs.
- **Database Storage**: Store scraped products in SQLite3 database.
- **Product Listing**: View products grouped by category.
- **Auto-Update**: Refresh product data if older than one week.
- **Search & Filter**: Asynchronous search and filtering functionality.

## Tech Stack
### **Backend** (Ruby on Rails)
- Ruby 3.2.2
- Ruby on Rails 7
- SQLite3
- Nokogiri (for web scraping)
- Sidekiq & Redis (for background jobs)
- RSpec, FactoryBot, Capybara (for testing)

### **Frontend** (React.js)
- React 18
- Axios (for API requests)
- Bootstrap (for styling)
- Jest & React Testing Library (for testing)

## Installation & Setup

### Installation Video

[See Video](https://vimeo.com/1058254737?share=copy)

### **1. Install RVM (Ruby Version Manager)**
```sh
# Install GPG keys
gpg --keyserver keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB

# Install RVM
\curl -sSL https://get.rvm.io | bash

# Load RVM into your shell session
source ~/.rvm/scripts/rvm

# Verify RVM installation
rvm --version
```

### **2. Install Ruby 3.2.2**
```sh
# Install Ruby 3.2.2
rvm install 3.2.2

# Set Ruby 3.2.2 as default
rvm use 3.2.2 --default

# Verify Ruby installation
ruby --version  # Should show 3.2.2
```

### **3. Clone the Repository**
```sh
git clone https://github.com/your-username/product-scraper.git
cd product-scraper
```

### **4. Backend Setup**
```sh
bundle install  # Install Ruby gems
rails db:create db:migrate db:seed  # Setup database
rails server -p 3001 # Start Rails server
```

### **5. Frontend Setup**
```sh
cd ../frontend  # Navigate to frontend directory
npm install  # Install dependencies
npm start  # Start React development server
```

### **6. Running Tests**
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

## Troubleshooting
- If you get **CORS errors**, ensure the Rails server allows requests from `http://localhost:3001`.
- If the database doesn't exist, run `rails db:create db:migrate`.
- For missing dependencies, run `bundle install` (backend) or `npm install` (frontend).
- If RVM installation fails, make sure you have `curl` and `gpg` installed on your system.
- If you get permission errors during RVM installation, try running the commands with `sudo`.
- If Ruby installation fails, ensure you have all required system dependencies installed. On Ubuntu/Debian, you might need to run:
  ```sh
  sudo apt-get update
  sudo apt-get install -y build-essential git-core curl libssl-dev libreadline-dev zlib1g-dev
  ```

## License
This project is licensed under the MIT License.

## Contributors
- **Abhigyan** - [GitHub Profile](https://github.com/Abhigyan001)
