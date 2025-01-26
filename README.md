# Advanced React To-Do Application 

## Project Overview

This project is an advanced To-Do application built with React, featuring external API integration, Redux for state management, and responsive design. It provides a user-friendly interface for managing tasks across different devices, with added functionalities like weather information for outdoor tasks and user authentication.

## Features

- **Task Management**
  - Add new tasks
  - View list of tasks
  - Delete tasks
  - Set task priorities (High, Medium, Low)

- **User Authentication**
  - Login/Logout functionality
  - Protected To-Do list (only visible to logged-in users)

- **API Integration**
  - Weather information display for outdoor tasks

- **Responsive Design**
  - Mobile-first approach
  - Excellent user experience on mobile, tablet, and desktop devices

- **State Management**
  - Redux for global state management
  - Redux Thunk/Saga for handling asynchronous actions

- **Data Persistence**
  - Local storage for saving tasks and authentication status

## Technologies Used

- React (with Functional Components and Hooks)
- Redux (with Redux Thunk/Saga)
- HTML5
- CSS3 (with Grid and Flexbox)
- JavaScript (ES6+)
- External Weather API
- Local Storage API



```markdown
# Advanced React To-Do Application
![Project Banner](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/todo-banner.png)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/advanced-react-todo.git

# Navigate to project directory
cd advanced-react-todo

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📋 Project Overview

A modern, feature-rich To-Do application built with React and Redux, featuring weather API integration and responsive design.

### Demo Credentials

```plaintext
Username: user
Password: password
```

## Tech Stack

```json
{
  "frontend": {
    "framework": "React 18",
    "stateManagement": "Redux Toolkit",
    "styling": ["Tailwind CSS", "CSS Grid", "Flexbox"],
    "authentication": "Redux (mock)",
    "storage": "Local Storage"
  },
  "apis": {
    "weather": "OpenWeatherMap API"
  }
}
```

##  Features

```typescript
interface Features {
  taskManagement: {
    add: boolean;          // ✅
    delete: boolean;       // ✅
    prioritize: boolean;   // ✅
    weather: boolean;      // ✅
  };
  authentication: {
    login: boolean;        // ✅
    logout: boolean;       // ✅
    protection: boolean;   // ✅
  };
  responsive: {
    mobile: boolean;       // ✅
    tablet: boolean;       // ✅
    desktop: boolean;      // ✅
  };
}
```

##  Environment Setup

```plaintext
# Create a .env.local file in the root directory
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
```

## 📱 Responsive Design

```css
/* Mobile First Approach */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    padding: 3rem;
  }
}
```

## State Management

```typescript
// Redux Store Structure
interface RootState {
  auth: {
    isAuthenticated: boolean;
    user: string | null;
  };
  tasks: {
    items: Task[];
    loading: boolean;
    error: string | null;
  };
  weather: {
    data: WeatherData | null;
    loading: boolean;
    error: string | null;
  };
}
```

## API Integration

```typescript
// Weather API Integration Example
async function fetchWeather(location: string): Promise<WeatherData> {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error('Weather data fetch failed');
  }
  
  return response.json();
}
```

## Local Storage

```typescript
// Local Storage Utilities
const storage = {
  saveTasks: (tasks: Task[]): void => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },
  
  getTasks: (): Task[] => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  },
  
  clearTasks: (): void => {
    localStorage.removeItem('tasks');
  }
};
```

## Error Handling

```typescript
// Error Boundary Component
class ErrorBoundary extends React.Component<Props, State> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorDisplay error={this.state.error} />;
    }
    return this.props.children;
  }
}
```

## Future Enhancements

```typescript
interface Roadmap {
  planned: [
    "Task Categories & Tags",
    "Due Dates & Reminders",
    "Backend Integration",
    "Drag & Drop Reordering"
  ];
  inProgress: string[];
  completed: string[];
}
```

## Contributing

```shellscript
# Fork the repository
git clone https://github.com/your-username/advanced-react-todo.git

# Create a new branch
git checkout -b feature/amazing-feature

# Commit your changes
git commit -m 'Add amazing feature'

# Push to the branch
git push origin feature/amazing-feature

# Open a Pull Request
git pull origin main
```
