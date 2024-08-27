AI Chat Feedback Application
Overview
This project is a ReactJS web application designed to allow users to chat with an AI model, provide feedback on the AI's responses, and revisit past conversations. The application is built to assess skills in creating a simple yet interactive web application with a focus on UI/UX design.

Live Demo
Check out the live version of the application here: AI Chat Feedback Application {https://bot-ai-kg.vercel.app/}

Features
AI Chat Interface: Users can chat with a mocked AI model.
Feedback Mechanism:
Thumbs Up/Down: Users can like or dislike AI responses.
Rating System: Users can rate the entire conversation out of 5 at the end.
Subjective Feedback: Users can provide detailed feedback on the conversation.
Chat History: Users can revisit past conversations, along with the feedback provided.
Feedback Dashboard: A view to see all feedback across conversations, with filtering options based on ratings.
Dark/Light Mode: Users can toggle between light and dark themes for a personalized experience.
Getting Started
Prerequisites
Node.js (v14+)
npm (v6+) or Yarn
Installation
Clone the repository:

bash : git clone https://github.com/kartikgupta1920/BotAI-KG.git
cd BotAI-KG
Install the dependencies:

bash : npm install

Running the Application
Start the development server:

bash: npm start

Open your browser and navigate to http://localhost:3000 to use the application.

Technical Choices
React: The primary library for building the user interface due to its component-based architecture and ease of state management.
Material-UI: Chosen for its comprehensive set of UI components and responsiveness, allowing for a consistent and modern design.
date-fns: Used for date manipulation and formatting, offering a lightweight and modular alternative to other date libraries.
JSON Mock Data: The AI responses are mocked using JSON to simplify the application logic and focus on front-end implementation.
Design Choices
Floating Feedback Buttons: Implemented to keep the interface clean, showing the feedback options only when necessary.
Modular Components: Each piece of functionality is broken into reusable components to enhance code readability and maintainability.
Feedback Dashboard: Designed as a table to facilitate easy sorting and filtering of feedback, enhancing user experience.
Trade-offs and Considerations
Scope Limitation: Given the time constraint, certain features like authentication and live AI integration were excluded to focus on core functionality.
Simplified AI Logic: The AI responses are mocked using static JSON, which limits the complexity of conversations but allows for easier testing and development.
UI/UX Focus: The design prioritizes ease of use and responsiveness, leveraging Material-UI for consistent styling. However, further customization could be done with more time.
Future Improvements
AI Integration: Connecting the chat interface to a real AI service for dynamic responses.
Enhanced Feedback Analysis: Adding charts and analytics to the feedback dashboard for better insights.
Mobile Optimization: Further refinements to ensure a seamless experience across all devices.
Repository
For more details and to explore the codebase, visit the GitHub repository: BotAI-KG {https://github.com/kartikgupta1920/BotAI-KG/tree/main}