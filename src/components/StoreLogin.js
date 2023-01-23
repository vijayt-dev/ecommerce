import useFetch from "./useFetch";


import React from 'react'
function StoreLogin({userLogin}) {
  const [data, isLoading, error] =  useFetch(
    "https://dummyjson.com/auth/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userLogin?.email,
        password: userLogin?.password,
      }),
    }

  )
  console.log(data)
  return (
    <div>StoreLogin</div>
  )
}

export default StoreLogin;


