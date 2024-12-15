# Holidaze Front-End Application

## Project Overview

Holidaze is a newly launched accommodation booking site that allows users to book holidays at various venues. This project involves developing a modern front-end application for Holidaze using React and Tailwind CSS. The application includes both customer-facing and admin-facing functionalities, enabling users to book holidays and manage venues and bookings.

## Features

### Customer-Facing Features
- View a list of venues
- Search for specific venues
- View detailed information about a venue
- View a calendar with available dates for a venue
- Register as a customer using a `stud.noroff.no` email
- Create bookings at venues
- View upcoming bookings

### Admin-Facing Features
- Register as a venue manager using a `stud.noroff.no` email
- Create, update, and delete venues
- View bookings for managed venues
- Update user avatar
- Login and logout

## Technical Stack
- **JavaScript Framework**: React
- **CSS Framework**: Tailwind CSS

## Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/holidaze.git
   cd holidaze
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a 

.env

 file in the root directory and add the following environment variables:
   ```env
   VITE_API_KEY=your_api_key
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Project Structure
```
.
├── public/
├── src/
│   ├── API/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## User Stories
- A user may view a list of Venues
- A user may search for a specific Venue
- A user may view a specific Venue page by id
- A user may view a calendar with available dates for a Venue
- A user with a `stud.noroff.no` email may register as a customer
- A registered customer may create a booking at a Venue
- A registered customer may view their upcoming bookings
- A user with a `stud.noroff.no` email may register as a Venue manager
- A registered Venue manager may create a Venue
- A registered Venue manager may update a Venue they manage
- A registered Venue manager may delete a Venue they manage
- A registered Venue manager may view bookings for a Venue they manage
- A registered user may login
- A registered user may update their avatar
- A registered user may logout

## Special Instructions for Testers
- Ensure you have the correct API key in the 

.env
 
## License
This project is licensed under the MIT License. See the LICENSE file for details.
