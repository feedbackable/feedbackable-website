import React, { useEffect } from "react"

import { navigate } from "gatsby"

function SignupPage() {
  useEffect(() => {
    navigate("https://feedbackable.app/auth/register")
  }, [])

  return null
}

export default SignupPage
