import React, { useEffect, useState } from 'react';

export default function Home() {
  const [name, setName] = useState();

  useEffect(() => {
    (
      async () => {
        const responde = await fetch('http://localhost:5000/auth/user', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        });

        const content = await responde.json();
        setName(content.name);

      }
    )();
  });

  return (
    <>
        <h2>Home page</h2>
        {name ? 'Zalogowano jako ' + name : 'Nie zalogowano'}
    </>
  );
}