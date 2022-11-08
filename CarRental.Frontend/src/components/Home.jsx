import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Home(props) {
  const { currentUser } = useAuth();
  
  return (
    <>
      <h2>Home page</h2>
      {currentUser ? 'Zalogowano jako ' + currentUser.email : 'Nie zalogowano'}
    </>
  );
}