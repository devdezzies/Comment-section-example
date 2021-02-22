import React from 'react'
import 'gitalk/dist/gitalk.css'
import GitalkComponent from "gitalk/dist/gitalk-component";

const Gitalking = () => {
  return(
    <GitalkComponent options={{
      clientID: '7391274a0cee4840ab59',
      clientSecret: 'da4d74c718716785dbfc50c7f8606b3b0717b9c6',
      repo: 'My-website',      // The repository of store comments,
      owner: 'devdezzies',
      admin: ['devdezzies'],
      distractionFreeMode: false
    }} />
  )
}

export default Gitalking