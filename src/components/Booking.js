import React, { Component } from 'react';

class Booking extends Component {

    constructor(){
        super()
        this.state={
            firstname="",
            startdate="",
            enddate="",
            starttime="",
            endtime="", 
        };
    }

    componentDidMount(){

        M.AutoInit();

    };

    render(){
        return(
            <div>
                <div className='container'>
                    <div className="row">
                        <form className="col s12" autoComplete='off'>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="firstname" type="text" className="validate" />
                                    <label htmlFor="first_name" className="active">First Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input type="text" id='startdate' className="datepicker" />
                                    <label htmlFor="choose_startdate" className="active">Start Date</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input type="text" id='enddate' className="datepicker" />
                                    <label htmlFor="choose_enddate" className="active">End Date</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input type="text" id='starttime' className="timepicker" />
                                    <label htmlFor="choose_starttime" className="active">Start Time</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input type="text" id='endtime' className="timepicker" />
                                    <label htmlFor="choose_endtime" className="active">End Time</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Booking;