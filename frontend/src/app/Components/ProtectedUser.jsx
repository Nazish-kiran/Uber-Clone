'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const ProtectedUser = ({ children }) => {
  const router = useRouter()
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/UserSignup")
    } else {
      setIsAuthorized(true)
    }
  }, [router])

  // While checking, don't render children
  if (!isAuthorized) return null

  return <>{children}</>
}

export default ProtectedUser
