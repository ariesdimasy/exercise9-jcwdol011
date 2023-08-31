
import { Routes, Route } from 'react-router'
import MyMenu from "./components/MyMenu"
import Home from './pages/home'
import { Container } from '@chakra-ui/react'

function App() {

  return (
    <>
      <MyMenu />
      <Container>
        <Routes>
          <Route path='/' Component={Home}></Route>
        </Routes>
      </Container>
      
    </>
  )
}

export default App
