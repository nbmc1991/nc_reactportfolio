import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                            src='https://github.com/nbmc1991/nc_reactportfolio/blob/master/public/IMG_5322.jpg?raw=true'
                            alt='avatar'
                            className='avatar-image'
                        />
                        <div className='banner-text'>
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | Bootstrap | JavaScript| React | NodeJS | Express | MongoDB
                            </p>
                            <div className='social-links'>
                                {/* LinkedIn*/}
                                <a rel='noopener noreferrer' href='https://www.linkedin.com/in/norma-cruz-8900542a/' target='_blank'>
                                    <i className='fa fa-linkedin-square' aria-hidden='true' />
                                </a>
                                {/* Github*/}
                                <a rel='noopener noreferrer' href='https://github.com/nbmc1991' target='_blank'>
                                    <i className='fa fa-github-square' aria-hidden='true' />
                                </a>
                                {/* Facebook*/}
                                <a rel='noopener noreferrer' href='https://www.facebook.com/ameera91' target='_blank'>
                                    <i className='fa fa-facebook-square' aria-hidden='true' />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Landing;