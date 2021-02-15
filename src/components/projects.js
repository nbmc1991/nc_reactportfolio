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
                <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                    <CardTitle style={{color: '#ffff', height:'176px', background: 'url(https://github.com/nbmc1991/reactive-employees/raw/master/public/demoshot.png) center /cover'}}>   </CardTitle>
                    <CardText>
Reactive employees using React                 
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/nbmc1991/reactive-employees" colored> Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                    <CardTitle style={{color: '#ffff', height:'176px', background: 'url(https://github.com/nbmc1991/alwaysBudgetTracking/blob/main/public/icons/icon-512x512.png?raw=true) center /cover'}}>   </CardTitle>
                    <CardText>
alwaysBudgetTracking using NodeJS                 
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/nbmc1991/reactive-employees" colored> Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>Express project goes here</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                <CardTitle style={{color: '#ffff', height:'176px', background: 'url(https://github.com/nbmc1991/TheWorkoutTracker/raw/main/public/images/screenshot2.png) center /cover'}}>   </CardTitle>
                <CardText>
TheWorkoutTracker using MongoDb                        
                </CardText>
                <CardActions border>
                    <Button href="https://github.com/nbmc1991/TheWorkoutTracker" colored> Github</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name='share' />
                </CardMenu>
            </Card>
            
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
                    <Grid className='projects-grid'>
                        <Cell col={12}>
                            <div className='content'>{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
              

                </section>

            </div>
        )
    }
}

export default Projects;