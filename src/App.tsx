import PageHeader from './layouts/PageHeader'
import './index.css'
import CategoryPill from './components/CategoryPill'


const App = () => {
  return (
    <div>
      <PageHeader />
      <div className='grid grid-cols-[auto,1fr] overflow-auto'>
          <div>Sidebar</div>
          <div className='px-8 overflow-x-hidden'>
            <div className='border'>
              <CategoryPill />
            </div>
            <div className='h-24'>
              VideoGridItem
            </div>
          </div>
      </div>
      {/* <section>
      <h1>Hello, World!</h1>
    </section>
    <section>
      <h1>Hello, World!</h1>
    </section>
    <section>
      <h1>Hello, World!</h1>
    </section> */}
    </div>
  )
}

export default App
