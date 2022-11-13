import React from 'react';
import { Link } from 'react-router-dom';

const home = () => (
    <div className='container'>
    <div className="jumbotron mt-5">
    <h1 className="display-4">Welcome to Fitme</h1>
    <h1 className="lead">If you don’t have any medical issues you’re in luck, but there could still be room for improvement when it comes to your wellbeing. In fact, things you brush off on a daily basis could be signs that you’re actually not taking such great care of yourself. </h1>
    <hr className="my-4"/>
    <p>Health, according to the World Health Organization, is "a state of complete physical, mental and social well-being and not merely the absence of disease and infirmity".A variety of definitions have been used for different purposes over time. Health can be promoted by encouraging healthful activities, such as regular physical exercise and adequate sleep,and by reducing or avoiding unhealthful activities or situations, such as smoking or excessive stress. Some factors affecting health are due to individual choices, such as whether to engage in a high-risk behavior, while others are due to structural causes, such as whether the society is arranged in a way that makes it easier or harder for people to get necessary healthcare services. Still, other factors are beyond both individual and group choices, such as genetic disorders.</p>
    <Link className="btn btn-primary btn-lg" to="/blog" role="button">Lets make you fit</Link>
    </div>
    </div>
);

export default home;