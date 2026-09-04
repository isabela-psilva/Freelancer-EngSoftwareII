import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Index from './Principal.tsx'
import Sobre from './Sobre.tsx'
function App() {
  

  return (
    <BrowserRouter>
      {/* Opcional: Um menu de navegação que aparece em todas as páginas */}
      

      {/* Configuração das páginas/módulos que serão trocados dinamicamente */}
      <Routes>
        <Route path="/Principal" element={<Index />} />
        <Route path="/Sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
