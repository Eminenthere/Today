import { LeftPanel, MainContent, TopPanel } from './screens'

function App() {
  return (
    <>
      <div className='container'>
        <div className='Side-Panel'>
          <LeftPanel />
        </div>

        <div className='Top-Panel'>
          <TopPanel />
        </div>

        <div className='Main-Panel'>
          <MainContent />
        </div>
      </div>
    </>
  )
}

export default App
