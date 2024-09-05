import Link from 'next/link'
import React from 'react'

const NavLogo = () => {
  return (
    <Link href={'/'}>
      <div className="Logo">
          <h3 className="text-extrabold text-lg tracking-wider italic">HealthSecure</h3>
      </div>
    </Link>
  )
}

export default NavLogo