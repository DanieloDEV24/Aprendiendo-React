import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FiltersProvider } from './Context/filters.tsx'

createRoot(document.getElementById('root')!).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
