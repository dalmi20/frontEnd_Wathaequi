import React from 'react'
import jwt from 'jsonwebtoken';



const token = localStorage.getItem("token");
console.log(token)

  const decodedToken = jwt.decode(token);

  if (decodedToken) {
    // Access the claims from the decoded token
    const { sub, exp, iat, ...claims } = decodedToken;

    console.log('Claims:', claims);
  } else {
    console.log('Invalid token');
  }

export default function Dashboard() {
  return (
   <h1>helloooo</h1>
  )
}
