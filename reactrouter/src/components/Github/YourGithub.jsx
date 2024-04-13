import React, { useState, useEffect} from 'react'

function YourGithub() {
    const [username,setUsername] = useState()

    const [data, setData] = useState([])
    let url = `https://api.github.com/users/${username}`

    useEffect(() => {
     fetch(url)
     .then(res => res.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [username,setUsername])

   
  return (
    <div>
        YourGithub
        <input className='bg-green-300' type="text" value={username} placeholder='your GitHub Username' onChange={(e) => setUsername && setUsername(e.target.value)}/>
        <div className='text-center m-4 bg-blue-300'>Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width= {300} /> </div>
    </div>
    

  )
}

export default YourGithub