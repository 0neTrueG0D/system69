import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className='container'>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='w-screen'>
            <h1 className='py-2 text-white font-bold text-xl text-center bg-blue-400'>
                DEMO ONLINE TEST
            </h1>
          
            <div className='grid grid-cols-1 md:grid-cols-12 gap-0 '>
                <div className='col-span-9 mx-1'>
                    <div className='flex flex-row bg-white border-b-2 border-gray-300 text-white'>
                        <button className='py-0 px-3 md:px-8 m-1 bg-blue-800 rounded-sm cursor-pointer'>
                          ALL SECTIONS
                        </button>
                        <button className='py-0 px-3 md:px-8 m-1 bg-blue-400 rounded-sm cursor-pointer'>
                          PHYSICS
                        </button>
                        <button className='py-0 px-3 md:px-8 m-1 bg-blue-400 rounded-sm cursor-pointer'>
                          CHEMISTRY
                        </button>
                        <button className='py-0 px-3 md:px-8 m-1 bg-blue-400 rounded-sm cursor-pointer'>
                          MATHS
                        </button>
                    </div>

                    <div className='shadow-lg text-white border-gray-300 border-2 m-1 rounded-md'>
                        <div className='flex flex-row justify-between px-2 bg-blue-400 border-b-2 border-gray-300 rounded-t-sm'>
                          <h1 className='font-bold'> Q No. : <span> 1 </span> </h1>
                          <div>
                              <label htmlFor="lang" className='font-bold'> View in:</label>
                              <select name="lang" id="lang" className='text-black px-2 mx-1 rounded-sm'>
                                <option value="english"> English </option>
                                <option value="hindi"> Hindi </option>
                              </select>
                          </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 bg-white text-black'>
                            <div className='col-span-1 p-1 md:border-r-[1px] border-gray-300'>
                                <h3 className='text-blue-800'>
                                  QUESTION INSTRUCTION
                                </h3>
                                <p>
                                You are given n permutations a1,a2,…,an, each of length m. Recall that a permutation of length m is a sequence of m distinct integers from 1 to m.
                                Let the beauty of a permutation p1,p2,…,pm
                                be the largest k such that p1=1,p2=2,…,pk=k. If p1≠1, then the beauty is 0.
                                The product of two permutations p⋅q
                                is a permutation r such that rj=qpj.
                                For each i
                                from 1 to n, print the largest beauty of a permutation ai⋅aj over all j from 1 to n (possibly, i=j).
                                </p>
                            </div>
                            <div className='col-span-1 p-1'>
                                <h3 className='text-blue-800'>
                                  QUESTION
                                </h3>
                                
                                <p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row bg-white text-white'>
                        <button className='py-0 px-3 md:px-8 m-1 bg-blue-400 rounded-sm cursor-pointer'>
                          CLEAR
                        </button>
                        <button className='py-0 px-3 md:px-8 m-1 bg-blue-400 rounded-sm cursor-pointer'>
                          REVIEW
                        </button>
                        <button className='py-0 px-3 md:px-8 m-1 bg-blue-400 rounded-sm cursor-pointer'>
                          DUMP
                        </button>
                        <button className='py-0 px-3 md:px-8 m-1 bg-blue-400 rounded-sm cursor-pointer'>
                          PREVIOUS
                        </button>
                        <button className='py-0 px-3 md:px-8 m-1 bg-blue-800 rounded-sm cursor-pointer'>
                          NEXT
                        </button>
                    </div>
                </div>
                <div className='col-span-3'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row text-black border-2 border-gray-300 my-1 mx-2 rounded-md shadow-lg bg-teal-100'>
                            <img src="/user.png" alt="profilepic" height="" width="100px" className='m-1 object-cover'/>
                            <div className='i items-center my-auto'>
                              <h3>Time left: <span>2:50</span></h3>
                              <h3>User Name</h3>
                            </div>
                        </div>

                        <div className='text-black border-2 h-64 md:h-80 lg:h-96 border-gray-300 my-1 mx-2 rounded-md shadow-lg bg-teal-100'>
                            <h3 className='bg-blue-400 px-2 rounded-t-sm text-white'>
                              Question Pallete
                            </h3>
                            <div className='grid grid-cols-5'>
                              {[...Array(10)].map((_, x) => (
                                <p className='text-center m-1 rounded bg-red-500'>{x+1}</p>
                              ))}
                            </div>
                        </div>

                        <div className='text-black border-2 border-gray-300 my-1 mx-2 rounded-md shadow-lg bg-teal-100'>
                            <h3 className='bg-blue-400 px-2 rounded-t-sm text-white'>
                              Legend (Click to View)
                            </h3>
                            <div className='grid grid-cols-2'>
                                <p className='text-left m-[1px] px-2 bg-green-500'>4 Answered</p>
                                <p className='text-left m-[1px] px-2 bg-red-500'>2 Not Answered</p>
                                <p className='text-left m-[1px] px-2 bg-purple-500'>2 Review + Ans</p>
                                <p className='text-left m-[1px] px-2 bg-yellow-200'>2 Review - Ans</p>
                                <p className='text-left m-[1px] px-2 bg-gray-400'>1 Dump</p>
                                <p className='text-left m-[1px] px-2 bg-gray-200'>1 Not Visited</p>
                            </div>
                            <p className='text-center m-[1px] px-2 bg-blue-400'>10 Total Questions</p>

                            <div className='grid grid-cols-2 my-4 text-white'>
                                <button className='py-1 px-3 md:px-8 m-[2px] bg-blue-400 rounded-sm cursor-pointer'>
                                  Profile
                                </button>
                                <button className='py-1 px-3 md:px-8 m-[2px] bg-blue-400 rounded-sm cursor-pointer'>
                                  Instr
                                </button>
                                <button className='py-1 px-3 md:px-8 m-[2px] bg-blue-400 rounded-sm cursor-pointer'>
                                  Questions
                                </button>
                                <button className='py-1 px-3 md:px-8 m-[2px] bg-blue-400 rounded-sm cursor-pointer'>
                                  Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='py-1 text-white font-bold text-center bg-blue-400'>
                IDK WHATS USE OF THIS STUPID THING
            </h1>
        </div>
    </div>
  )
}

export default Home
