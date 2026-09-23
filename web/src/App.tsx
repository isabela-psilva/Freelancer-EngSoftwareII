import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Index from './Principal'
import Sobre from './Sobre'
function App() {
  

  return (
    <BrowserRouter>
      {/* Opcional: Um menu de navegação que aparece em todas as páginas */}
      

      {/* Configuração das páginas/módulos que serão trocados dinamicamente */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Principal" element={<Index />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
