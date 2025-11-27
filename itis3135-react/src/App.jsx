import Layout from './pages/Layout.jsx'
import { ThemeProvider } from './components/ThemeProvider.jsx'

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App
