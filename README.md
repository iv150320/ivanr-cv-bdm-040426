<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🎯 Ivan Rodin's Interactive Professional Profile & AI Assistant

This repository hosts a sophisticated, interactive online curriculum vitae (CV) for Ivan Rodin, a seasoned Business Development Manager / Enterprise Sales Manager. Beyond a static resume, this application integrates the power of the Google Gemini API to offer an AI-powered assistant capable of interacting with and providing insights into Ivan's professional experience and skills. Developed with React, Vite, and Tailwind CSS, it delivers a modern, responsive, and engaging presentation of a professional profile.

The project is also configured as an AI Studio app, allowing seamless integration and deployment within Google's AI ecosystem.

## 🚀 Key Features

*   **Dynamic & Interactive CV:** A highly engaging presentation of Ivan Rodin's professional journey, combining a clean design with interactive elements and smooth animations powered by the `motion` library.
*   **AI-Powered Assistant:** Leverages the Google Gemini API to provide an intelligent assistant that can answer questions about Ivan's experience, skills, and career aspirations, or generate tailored responses based on his comprehensive professional profile.
*   **Comprehensive Professional Profile:** Details Ivan's extensive experience (10+ years) in B2B sales, business development, complex IT solutions, and enterprise-level engagements, including deep understanding of analytical platforms and Data Management.
*   **Modern Frontend Stack:** Built with [React 19](https://react.dev/) for a component-based UI, [Vite 6](https://vitejs.dev/) for lightning-fast development, and [TypeScript 5](https://www.typescriptlang.org/) for robust, type-safe code.
*   **Sleek User Interface:** Styled with [Tailwind CSS 4](https://tailwindcss.com/) for a utility-first approach, ensuring a highly customizable and aesthetically pleasing design with a focus on readability and modern aesthetics.
*   **Icon-Rich Presentation:** Utilizes `lucide-react` for a comprehensive suite of vector icons, enhancing visual clarity and information density across different sections of the CV.
*   **API Integration:** While the primary UI is client-rendered, the inclusion of `express` and `dotenv` implies a flexible architecture designed to support secure backend API calls, particularly for the Gemini API.
*   **AI Studio Ready:** Designed to be run and deployed as an AI Studio application, making it easy to integrate with Google's AI development ecosystem.

## 🛠 Technology Stack

This project is built using a modern and robust technology stack, combining leading frontend, backend, and AI tools:

**Frontend:**
*   **[React 19](https://react.dev/)**: A declarative, component-based JavaScript library for building user interfaces.
*   **[Vite 6](https://vitejs.dev/)**: A next-generation frontend tooling that provides an extremely fast development experience and optimized builds.
*   **[TypeScript 5](https://www.typescriptlang.org/)**: A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and developer experience.
*   **[Tailwind CSS 4](https://tailwindcss.com/)**: A utility-first CSS framework for rapidly building custom designs directly in your markup.
*   **[Lucide React](https://lucide.dev/)**: A beautifully simple, customizable, and consistent icon library used for various visual elements.
*   **[Motion](https://www.framer.com/motion/)**: A production-ready animation library for React, enabling fluid and performant UI animations and scroll effects.

**Backend (Implied/Potential):**
*   **[Node.js](https://nodejs.org/en)**: A JavaScript runtime built on Chrome's V8 JavaScript engine, typically used for server-side logic.
*   **[Express.js](https://expressjs.com/)**: A fast, unopinionated, minimalist web framework for Node.js, often used to build RESTful APIs.
*   **[dotenv](https://www.npmjs.com/package/dotenv)**: A module that loads environment variables from a `.env` file, crucial for managing sensitive data like API keys.

**Artificial Intelligence:**
*   **[Google Gemini API](https://ai.google.dev/docs/gemini_api_overview)**: Google's powerful multimodal AI model for generating content, reasoning, and understanding various forms of data.
*   **[@google/genai](https://www.npmjs.com/package/@google/genai)**: The official Node.js/JavaScript client library for interacting with the Google Gemini API.

**Development Tools:**
*   **[npm](https://www.npmjs.com/)**: Node.js package manager, used for dependency management and running scripts.
*   **[Git](https://git-scm.com/)**: Version control system for tracking changes and collaboration.

## 🏗 Architecture & Workflow

The application is structured to support a client-server architecture, typical for modern web applications that interact with external APIs securely. The frontend is a React application served by Vite, which displays Ivan Rodin's resume. The presence of `express` and `dotenv` in the dependencies suggests an intention for a lightweight Node.js/Express backend to handle sensitive operations, particularly interacting with the Google Gemini API securely by abstracting the `GEMINI_API_KEY`.

Here's a breakdown of the intended workflow:

1.  **Client-Side Rendering (CSR):** The user accesses the `index.html` file, which serves as the entry point for the React application (`src/main.tsx`).
2.  **Interactive CV Display:** The React components within `src/App.tsx` render Ivan Rodin's extensive `RESUME_DATA` (defined within the component itself) with rich interactive elements, animations, and a comprehensive set of icons, providing a dynamic and engaging user experience.
3.  **AI Assistant Interaction:** When a user initiates an interaction with the AI assistant (e.g., submits a query about the CV content), the React frontend sends a request.
4.  **Secure API Proxy (Intended):** This request is ideally routed to a lightweight Express.js backend. This backend securely loads the `GEMINI_API_KEY` from a `.env.local` file using `dotenv`, preventing its exposure on the client-side.
5.  **AI Processing:** The Express backend then uses the `@google/genai` library to make an authenticated request to the Google Gemini API. The Gemini API processes the user's query, leveraging the context of Ivan's resume data to formulate a relevant response.
6.  **Response Delivery:** The generated AI response is sent back from the Gemini API to the Express backend, which then relays it to the React frontend. The frontend updates the UI to display the AI's output to the user.

This architecture ensures an efficient client-side experience for the CV presentation and enables secure handling of API keys and complex server-side logic for AI interactions, adhering to best security practices.

```mermaid
graph TD
    A[User Browser] -->|Accesses Frontend URL| B(Vite Dev/Prod Server)
    B --> C{React App - src/App.tsx}
    C -->|Renders RESUME_DATA & UI Components| D[Interactive CV Display]
    C -->|User Interaction with AI (e.g., Query)| E(Express.js Backend - Planned/Implicit)
    E -->|Loads GEMINI_API_KEY| F[dotenv (.env.local)]
    E -->|Securely calls with @google/genai| G(Google Gemini API)
    G -->|Processes query, Generates response| E
    E -->|Sends AI response to Frontend| C
    C -->|Updates UI with AI Output| D
```

## 📂 Project Structure

The repository is organized following a standard React/Vite project structure, with additional files for API key management and AI Studio metadata:

```
ivanr-cv-bdm-040426/
├── public/                     # Static assets (e.g., favicon, images).
│   └── .keep                   # Placeholder file.
├── src/                        # Main application source code.
│   ├── main.tsx                # Entry point for the React application.
│   ├── App.tsx                 # Core React component containing RESUME_DATA, UI logic, and AI integration.
│   └── index.css               # Global CSS styles, likely including Tailwind directives.
├── .env.example                # Example environment file to guide API key setup.
├── .gitignore                  # Specifies intentionally untracked files to ignore (e.g., node_modules, .env.local).
├── index.html                  # Main HTML file, served by Vite, where the React app is mounted.
├── metadata.json               # Metadata file, typically used by AI Studio for app configuration.
├── package.json                # Project dependencies, scripts, and metadata.
├── tsconfig.json               # TypeScript compiler configuration.
└── vite.config.ts              # Vite build tool configuration file.
```

**Key files and directories:**

*   `src/App.tsx`: The central component where Ivan Rodin's resume data (`RESUME_DATA`) is defined, parsed, and rendered into an interactive UI. It also orchestrates client-side logic and likely includes the direct calls to the Google Gemini API (or to a local backend proxy).
*   `package.json`: This file is crucial for managing project dependencies (like React, Vite, `lucide-react`, `motion`, `@google/genai`, `express`, `dotenv`, and `tailwindcss`) and defining the build and development scripts.
*   `.env.example`: Provides a clear template for setting up necessary environment variables, particularly the `GEMINI_API_KEY`, which is essential for the AI functionality.

## ⚙️ Installation & Quick Start

Follow these steps to get Ivan Rodin's Interactive CV & AI Assistant running on your local machine.

### Prerequisites

Ensure you have the following software installed:
*   **[Node.js](https://nodejs.org/en/)** (LTS version recommended)
*   **[npm](https://www.npmjs.com/)** (usually comes bundled with Node.js)
*   A **[Google Gemini API Key](https://ai.google.dev/docs/ai_studio_api_key)** with appropriate permissions to use the Gemini models.

### Steps

1.  **Clone the Repository (or navigate to existing project directory):**

    If you're cloning the project from GitHub:
    ```bash
    git clone https://github.com/your-username/ivanr-cv-bdm-040426.git # Replace 'your-username' with the actual repository owner
    cd ivanr-cv-bdm-040426
    ```
    If you already have the project files locally, simply navigate to its root directory:
    ```bash
    cd /path/to/ivanr-cv-bdm-040426
    ```

2.  **Install Dependencies:**

    Navigate to the project's root directory and install all required Node.js packages for both frontend and backend (if applicable):
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**

    Create a `.env.local` file in the root of your project by copying the provided example file:
    ```bash
    cp .env.example .env.local
    ```
    Open the newly created `.env.local` file and set your Google Gemini API Key:
    ```dotenv
    GEMINI_API_KEY="YOUR_GOOGLE_GEMINI_API_KEY_HERE"
    ```
    *Replace `"YOUR_GOOGLE_GEMINI_API_KEY_HERE"` with your actual API key obtained from [Google AI Studio](https://ai.google.dev/docs/ai_studio_api_key).*

    **Security Note:** For production deployments, exposing `GEMINI_API_KEY` directly to the client-side (if `@google/genai` is called directly from `src/App.tsx` without a backend proxy) is not recommended. The presence of `express` and `dotenv` in `package.json` suggests an intention for a backend to securely handle this key. For local development as per the original instructions, this setup might suffice for quick testing.

4.  **Run the Application:**

    Start the development server. This command primarily launches the Vite frontend application:
    ```bash
    npm run dev
    ```
    The application will typically be accessible in your web browser at `http://localhost:3000`. Open this address to view Ivan Rodin's interactive CV and engage with the AI assistant.

    *Note: Based on the `package.json` scripts, `npm run dev` primarily starts the Vite development server. If a separate Express.js backend is intended for API proxying, it would typically need to be started by a separate command, which is not defined in the provided `package.json` scripts.*

### Building for Production

To create a production-ready, optimized build of the frontend application:
```bash
npm run build
```
This command will generate optimized static assets (HTML, CSS, JavaScript) in the `dist` directory, ready for deployment to a static host or integrated with a Node.js server.

### Viewing in AI Studio

The original configuration suggests this application is designed for deployment to Google AI Studio. You can view the original AI Studio app at the following URL:

https://ai.studio/apps/f5b3fa54-8452-4d36-9481-e30bfe4c5ec4

*(Note: This link points to the original AI Studio app. If you deploy your modified version to AI Studio, you will obtain a new, unique URL for your deployment.)*