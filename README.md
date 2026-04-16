# KeenKeeper

**KeenKeeper** is a personal relationship management tool designed to help users maintain and nurture meaningful connections. By tracking interactions and setting relationship goals, KeenKeeper ensures you never lose touch with the people who matter most.

---
## Technologies Used
- **React.js**: For building a dynamic and responsive user interface.

- **Context API**: For global state management (Timeline and Interaction history).

- **LocalStorage**: To ensure user data persists across browser refreshes.

- **Tailwind CSS & DaisyUI**: For modern, sleek, and mobile-friendly styling.

- **React Router (v6)**: For seamless navigation and data loading.

- **Recharts**: For interactive data visualization and friendship analytics.

- **React Toastify**: For beautiful, non-intrusive success notifications.

---
## Key Features
### 1. **Dynamic Interaction Tracking**

Users can log check-ins (Calls, Texts, or Videos) with friends instantly from the details page. These interactions are automatically synchronized across the app using the React Context API and stored in the browser's LocalStorage for long-term persistence.

### 2. **Intelligent Timeline with Advanced Filtering**

The Timeline page provides a chronological history of all past connections. It features professional-grade search and filter capabilities, allowing users to find specific interactions by friend name or activity type, and sort them by date (Newest vs. Oldest).

### 3. **Friendship Analytics Dashboard**

Built with Recharts, the Stats page offers a visual breakdown of communication patterns. The interactive Pie Chart dynamically calculates and displays the distribution of interaction types, helping users understand how they spend time with their network.

---
## Project Preview

| Feature | Description |
| ------------- | ------------- |
| Home Page | Browse your list of friends with a beautiful grid layout and smooth loading states. |
| Friend Details | View individual bios, relationship goals, and log new interactions. |
| Stats | Visualize your social habits with "By Interaction Type" analytics. |

---
## How to Run Locally
1. **Clone the repository**:

    Bash

    ```
    git clone https://github.com/your-username/keenkeeper.git

    ```
2. **Install dependencies**:

    Bash

    ```
    npm install

    ```
3. **Start the development server**:

    Bash

    ```
    npm run dev

    ```

---
## License

This project is open-source and available under the **MIT License**.

---
### Acknowledgments
- Design inspired by modern CRM and social management tools.

- Built with a focus on clean code and efficient React state management.