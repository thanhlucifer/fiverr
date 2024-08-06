import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../../common/path'

const PageNotFound = () => {
  return (
    <div>
        <Link to={path.home}>Back</Link>
    </div>
  )
}

export default PageNotFound