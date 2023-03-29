import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import AddEditStudent from './pages/AddEditStudent/AddEditStudent'
import Start from './pages/StartPage/Start'
import Students from './pages/Students/Students'
import { MainPageContainer } from './styles/MainPageConatiner'
import GlobalStyles from './theme/GlobalStyles'

function App() {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(prevIsOpen => !prevIsOpen)
	}

	return (
		<>
			<GlobalStyles />
			<Navbar toggle={toggle} />
			<MainPageContainer>
				<Sidebar isOpen={isOpen} />
				<Routes>
					<Route path="/" element={<Start isOpen={isOpen} />} />
					<Route path="/students" element={<Students isOpen={isOpen} />} />
					<Route path="/students/:studentId" element={<AddEditStudent />} />
					<Route path="/student/:studentId" element={<AddEditStudent isEdit/>} />
				</Routes>
			</MainPageContainer>
		</>
	)
}

export default App
