import { BrowserRouter, Routes, Route } from 'react-router'
import { ThemeProvider } from './components/ThemeProvider'
import { Layout } from './components/Layout'
import Overview from './pages/Overview'
import Colors from './pages/Colors'
import Typography from './pages/Typography'
import Components from './pages/Components'
import LayoutPage from './pages/LayoutPage'
import Charts from './pages/Charts'
import Motion from './pages/Motion'
import Icons from './pages/Icons'
import Accessibility from './pages/Accessibility'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Overview />} />
            <Route path="colors" element={<Colors />} />
            <Route path="typography" element={<Typography />} />
            <Route path="components" element={<Components />} />
            <Route path="layout" element={<LayoutPage />} />
            <Route path="charts" element={<Charts />} />
            <Route path="motion" element={<Motion />} />
            <Route path="icons" element={<Icons />} />
            <Route path="accessibility" element={<Accessibility />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
