
import './App.css'

function App() {

  return (
    <>
      <div className='w-[100%] text-center h-24 bg-slate-500'>
        <h1 className='p-5 text-4xl font-extrabold'>Social Media Data from <span className='text-white'>You<span className='bg-red-500 p-1 rounded-[10px]'>Tube</span></span>  </h1>
      </div>
      <div className='bg-slate-400 w-full h-48'>
        <div className='text-center'>
          <p className='p-4 text-3xl font-extrabold'>Put your link here</p>
          <input type="text" placeholder='Drop Link' className='text-center rounded-full h-14 w-1/3' />
          <br />
          <button className=' w-1/12 bg-white text-black hover:bg-gray-800 hover:text-white transition ease-in m-2 p-2 rounded-lg'>Search</button>
        </div>
      </div>

      <section className='bg-slate-300 h-[700px] mx-auto'>
        <p className='pt-5 text-center text-2xl font-bold'>Details</p>
        <div className='w-2/4 flex justify-center m-auto bg-slate-100 rounded-full p-2 mt-6'>
          <div className='mx-auto mr-3 '>
            <img className='w-12 h-12 mx-auto  rounded-full ' src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg" alt="" />
          </div>
          <div className='mx-auto ml-0 '>
            <p className='font-extrabold'>Channel name</p>
            <p>Owner name</p>
          </div>
        </div>

        <div className='grid grid-cols-4 gap-2 pt-8 w-4/5 mx-auto text-center'>
          <div className=' bg-red-400 h-32 pt-7 rounded-lg'>
            <p className='font-extrabold text-lg'>Total Likes</p>
            <p className='text-3xl font-bold'>00</p>
          </div>
            {/* <input className='text-center h-9 rounded-lg shadow-2xl' type="text" /> */}
            <div className=' bg-amber-400 h-32 pt-7 rounded-lg'>
            <p className='font-extrabold text-lg'>Total Dislikes</p>
            <p className='text-3xl font-bold'>00</p>
          </div>
          <div className=' bg-lime-400 h-32 pt-7 rounded-lg'>
            <p className='font-extrabold text-lg'>Total Views</p>
            <p className='text-3xl font-bold'>00</p>
          </div>
          <div className=' bg-green-400 h-32 pt-7 rounded-lg'>
            <p className='font-extrabold text-lg'>Duration</p>
            <p className='text-3xl font-bold'>00</p>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-2 pt-8 w-4/5 mx-auto text-center'>
          <div className="bg-zinc-400 rounded-lg h-32 pt-7">
            <p className='font-extrabold text-lg'>Total Comments</p>
            <p className='text-3xl font-bold'>00</p>
          </div>
          <div className="bg-indigo-400 rounded-lg h-32 pt-7">
            <p className='font-extrabold text-lg'>Positive Comments</p>
            <p className='text-3xl font-bold'>00</p>
          </div>
          <div className="bg-pink-400 rounded-lg h-32 pt-7">
            <p className='font-extrabold text-lg'>Negative Comments</p>
            <p className='text-3xl font-bold'>00</p>
          </div>
        </div>

        <div className="bg-teal-400 rounded-lg h-32 pt-7 w-1/4 text-center mx-auto mt-6">
          <h1 className='font-extrabold text-2xl underline'>BenchMark</h1>
          <p className='text-3xl font-bold'>00</p>
        </div>
      </section>
    </>
  )
}

export default App
