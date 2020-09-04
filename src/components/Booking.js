import React, { Component } from 'react';
import M from 'materialize-css';
import axios from 'axios';

class Booking extends Component {

    constructor(props){
        super(props)
        this.state={
            name:"",
            date:"",
            starttime:"",
            endtime:"", 
            loading: false
        };
        //refs
        this.date = React.createRef();
        this.starttime = React.createRef();
        this.endtime = React.createRef();
    }

    //On Time Change
    handleTime = () =>{
        this.setState({
            starttime: this.starttime.current.value,
            endtime: this.endtime.current.value
        });     
    }


    //On Date Change
    handleDate = () =>{
        this.setState({
            date: this.date.current.value
        });     
    } 

    //On Change
    handleChange = e =>{
        this.setState({
            [e.target.id]: e.target.value
        })
        //e.preventDefault();
    }

    //On Submit
    handleSubmit = (e) =>{
        e.preventDefault();
        
        const name = this.state.name
        const date = this.state.date
        const starttime = this.state.starttime
        const endtime = this.state.endtime

        this.setState({
            loading: true
        })

        const data ={
            name,
            date,
            starttime,
            endtime
        }

        axios.post('/t/slotBookingAPP/post', data)
            .then(res =>{
                console.log(res);
                this.setState({
                    loading: false,
                    message: res.data
                })
                /* .catch(err => {
                    console.log(err);
                    this.setState({
                        loading: false
                    })
                }) */
            })
        this.state.name=""
        this.state.date=""
        this.state.starttime=""
        this.state.endtime=""
    }

    //show message before submitting
    loadOrShowMessage(){
        if (this.state.loading){
            return <p>Loading...</p>
        }else{
            return <p>{this.state.message}</p>
        }
    }

    componentDidMount(){
        var context = this;
        var elemsDates = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elemsDates, {
            format: "dd/mm/yyyy",
            showClearBtn: true,
            onClose: context.handleDate,
            minDate: new Date()
            
        });
        var elemsTimes = document.querySelectorAll('.timepicker');
        M.Timepicker.init(elemsTimes, {
            showClearBtn: true,
            defaultTime: "now",
            twelveHour: true,
            vibrate: true,
            onCloseEnd: context.handleTime

        });
        
        /* document.addEventListener('DOMContentLoaded', function() {
            var elemsDates = document.querySelectorAll('.datepicker');
            
            var elemsTimes = document.querySelectorAll('.timepicker');
            M.Timepicker.init(elemsTimes, {
                showClearBtn: true,
                defaultTime: "now",
                twelveHour: true,
                vibrate: true,
                onCloseEnd: context.handleTime

            });
          });
         */
          console.log('hi there');
    };

    render(){
        return(
            <div>
                <div className='container'>
                    <div className="row">
                        <form className="col s12" autoComplete='off' onSubmit={this.handleSubmit.bind(this)}>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="name" 
                                        type="text" 
                                        className="validate"
                                        value={this.state.name}
                                        onChange = { this.handleChange.bind(this) }
                                    />
                                    <label htmlFor="name" className="active">Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input type="text" 
                                        id='date'
                                        className="datepicker"
                                        value={this.state.date}
                                        onChange={ this.handleDate.bind(this)}
                                        ref = { this.date }
                                    />
                                    <label htmlFor="choose_date" className="active">Date</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input type="text" 
                                        id='starttime'
                                        className="timepicker"
                                        value={this.state.starttime}
                                        onChange = { this.handleTime.bind(this) }
                                        ref = { this.starttime }
                                    />
                                    <label htmlFor="choose_starttime" className="active">Start Time</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input type="text"
                                        id='endtime' 
                                        className="timepicker"
                                        value={this.state.endtime}
                                        onChange = { this.handleTime.bind(this) }
                                        ref = {this.endtime}
                                    />
                                    <label htmlFor="choose_endtime" className="active">End Time</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <button className="btn waves-effect waves-light" 
                                            type="submit" 
                                            name="action" 
                                        >Submit
                                    </button>
                                </div>
                            </div>  
                        </form>
                        {this.loadOrShowMessage()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Booking;