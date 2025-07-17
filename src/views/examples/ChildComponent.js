import React from 'react';
import './Demo.scss';
class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleHideShow = () => {
        this.setState({
            showJobs: !this.state.showJobs
        });
    }
    handleDeleteClick = (job) => {
        this.props.deleteJob(job)
    }
    render() {

        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs === false ?
                    <div><button className="btn-show"
                        onClick={() => this.handleHideShow()}>Show</button></div>
                    :
                    <>
                        <div className="job-list">
                            {
                                arrJobs.map((item, index) => {
                                    if (item.salary >= 500) {
                                        return (
                                            <div key={item.id}>
                                                {item.title} - {item.salary}$ <></>
                                                <span onClick={() => this.handleDeleteClick(item)}>x</span>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div><button style={{ color: 'blue' }}
                            onClick={() => this.handleHideShow()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;