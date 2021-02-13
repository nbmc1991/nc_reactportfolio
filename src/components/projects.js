import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <h1>hello world</h1>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>NodeJS</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>Express project goes here</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>MongoDb project goes here</h1></div>
            )
        }
    }

    render() {
        return (
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>Express</Tab>
                    <Tab>MongoDb</Tab>
                </Tabs>

                <section className='projects-grid'>
                    <Grid className='project-grid'>
                        <Cell col={12}>
                            <div className='content'>{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    {this.toggleCategories()}

                </section>

            </div>
        )
    }
}

export default Projects;