import homeBg from './assets/images/homeBg.jpg';

function App() {
  return (
    <>
      <div className={`h-screen dark:bg-slate-800 bg-cover`} style={{ backgroundImage: `url(${homeBg})` }}  >
        <span className='dark:text-white dark:bg-slate-400 dark:shadow-lg bg-white p-3 flex text-xl md:text-2xl lg:text-3xl font-serif'>Anonymous63</span>
      </div>
    </>
  )
}

export default App
