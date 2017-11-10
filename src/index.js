import axios from 'axios';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import NavBar from './components/nav_bar';
import SecondaryNav from './components/secondary_nav';
import SearchBar from './components/search_bar';
import TaskList from './components/tasks_list';
import TaskDetail from './components/tasks_detail';

class App extends Component {
    tasks = [];
    areas = [];
    workers = [];

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            selectedTask: null
        };

        axios.get('../data/tasks.json')
            .then((tasks) => {
                axios.get('../data/areas.json')
                    .then((areas) => {
                        this.tasks = tasks.data.tasks;
                        this.areas = areas.data.areas;
                        this.addAreaToTask(this.tasks, this.areas);
                        this.setState({ tasks: this.tasks });
                    })
                    .catch((err) => {
                        console.error('axios.get areas error', err);
                    });
            })
            .catch((err) => {
                console.error('axios.get tasks error', err);
            });

        axios.get('../data/workers.json')
            .then((workers) => {
                this.workers = workers.data.workers;
            })
            .catch((err) => {
                console.error('axios.get workers error', err);
            });
    }

    taskSearch(term) {
        console.log('Search term: ' + term);
    }

    render() {
        return (
            <div>
                <NavBar />
                <SecondaryNav />
                <div className="container">
                    <section className="column">
                        <SearchBar onSearchTermChange={term => this.taskSearch(term)}/>
                        <TaskList
                            onTaskSelect={selectedTask => {
                                this.addWorkerToTask(selectedTask, this.workers);
                                this.setState({selectedTask})
                            }}
                            selectedTask={this.state.selectedTask}
                            tasks={this.state.tasks}/>
                    </section>
                    <section id="task-details" className="column">
                        <TaskDetail task={this.state.selectedTask}/>
                    </section>
                </div>
            </div>
        );
    }

    addWorkerToTask(task, workers) {
        for(let i = 0; i < workers.length; i++) {
            if (task.details.assignedTo === workers[i].id) {
                task.details.assignedTo = workers[i];
            }
        }
    }

    addAreaToTask(tasks, areas) {
        for(let i = 0; i < tasks.length; i++) {
            for(let j = 0; j < areas.length; j++) {
                if (tasks[i].details.area === areas[j].id) {
                    tasks[i].details.area = areas[j];
                }
            }
        }
    }
}

ReactDom.render(<App/>, document.querySelector('.app'));