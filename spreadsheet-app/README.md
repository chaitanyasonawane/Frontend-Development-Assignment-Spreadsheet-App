# Spreadsheet App

This is a frontend application that mimics the functionality of a spreadsheet with advanced features. It is built using Next.js and styled with Tailwind CSS.

## Features

- **Grid Rendering**: A grid of 1000 editable cells.
- **Cell Editing**: Each cell is editable, with changes being stored in memory.
- **Cell Formatting**: Basic formatting options like text alignment and font size adjustments.
- **Data Validation**: Basic rules to restrict input types in certain cells.
- **Search and Filter**: Quickly locate specific data within the grid.
- **Pagination/Infinite Scrolling**: Efficient handling of large datasets.
- **Undo/Redo**: Revert changes made to the cells.

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **State Management**: Zustand

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chaitanyasonawane/spreadsheet-app.git
   cd spreadsheet-app
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

### Testing

To run the tests:
```bash
npm run test
```
or
```bash
yarn test
```

### Deployment

You can deploy this application to Vercel, Netlify, or any platform that supports Next.js.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.