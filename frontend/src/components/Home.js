import React from 'react';
import { Link } from 'react-router-dom';

const home = () => (
    <div className='container'>
    <div className="jumbotron mt-5">
    <h1 className="display-4">Welcome to Fitme</h1>
    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr className="my-4"/>
    <p>It uses utility  for typography and spacing to space content out within the larger container.</p>
    <Link className="btn btn-primary btn-lg" to="/blog" role="button">Lets make you fit</Link>
    </div>
    </div>
);

export default home;