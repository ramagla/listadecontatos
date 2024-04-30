import Sidebar from './containers/SideBar'
import GlobalStyle, { GeneralContainer } from './globalStyles'
import { MainSection } from './containers/MainSection'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <GeneralContainer>
        <Sidebar />
        <MainSection />
      </GeneralContainer>
      {/* Stopped at the lesson 'Understanding Enums' */}
    </Provider>
  )
}

export default App
