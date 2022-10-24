import React, { useEffect, useState } from 'react';

export default function Home(props) {

  return (
    <>
        <h2>Home page</h2>
        {props.name ? 'Zalogowano jako ' + props.name : 'Nie zalogowano'}
    </>
  );
}