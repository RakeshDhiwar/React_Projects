import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
function Github() {

    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/rakeshdhiwar')
    //  .then(res => res.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

    const data = useLoaderData()
    
  return (
    <div className='text-center m-4 bg-blue-300'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width= {300} />
    <NavLink to="/yourgithub"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Your Github Account
                                </NavLink>
    </div>
  )
}

export default Github

export const githubinfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rakeshdhiwar')
    return response.json()
}