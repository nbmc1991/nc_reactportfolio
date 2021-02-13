import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                            src='https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png'
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
                                <a rel='noopener noreferrer' href='http://google.com' target='_blank'>
                                    <i className='fa fa-linkedin-square' aria-hidden='true' />
                                </a>
                                {/* Github*/}
                                <a rel='noopener noreferrer' href='http://google.com' target='_blank'>
                                    <i className='fa fa-github-square' aria-hidden='true' />
                                </a>
                                {/* Facebook*/}
                                <a rel='noopener noreferrer' href='http://google.com' target='_blank'>
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