import React from 'react'
import sublinks from './Components/Strapidata'
import { useGlobalContext } from './Components/Context'


const NavLinks = () => {
  const { setPageId } = useGlobalContext()

  return (
    <div className='nav-links'>
      {sublinks.map((item) => {
        const { pageId, page } = item;
        console.log(pageId,page,":LKJHGFD")
        return (
          <button
            key={pageId}
            className='navss-link'
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        )
      })}

    </div>
  )
}

export default NavLinks
