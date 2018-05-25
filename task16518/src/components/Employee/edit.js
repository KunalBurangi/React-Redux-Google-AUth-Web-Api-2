import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as employeeAction from '../../actions/employeeActions';


class EmpEdit extends Component{
    constructor(props){
        super(props);
       alert(this.props.employees)
        this.state = {
            name : this.props.employees.Name,
            password:  this.props.employees.Password,
            phone:  this.props.employees.Phone,
            email:  this.props.employees.Email,
            dob:  this.props.employees.DOB,
            country: this.props.employees.Country,
            
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event){
        let editdata = {
            "Id" : this.props.match.params.id,
            "name" : this.state.name,
            "Email": this.state.email,
            "Password": this.state.password,
            "Phone": this.state.phone,
            "Country": this.state.country,
            "Dob": this.state.dob,
        } 
        this.props.actions.EditOneEmp(editdata)
        .then(
            res => {
                this.props.actions.fetchAllEmployee();
            }
        );
    }

    render(){
        return(
            <div className= "container">
                <form action="/employee" onSubmit = {this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputName">Name</label>
                        <input type="Name" className="form-control" id="inputName" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password"  value={this.state.password} name="Password" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Email</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="abc@example.com" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">Phone</label>
                        <input type="text" className="form-control" id="inputCity" value={this.state.phone} name="phone" onChange={this.handleChange} />
                    </div>
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">DOB</label>
                        <input type="text" className="form-control" id="inputCity" name="dob" value={this.state.dob} onChange={this.handleChange} />
                    </div>
                    </div>
                    <div className="form-group col-md-4">
                        <label>State</label>
                        <select id='select1' onChange={this.handleChange}  name="country"value={this.state.country} className="form-control">
                          {this.state.states}>
                        {/* //  <option> </option> */}
                        </select>
                    </div>
                    
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" onChange={this.handleChange} name="check" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary  buttonedit">Edit</button> &nbsp;
                <button type="reset" className="btn btn-danger  ">Reset</button>
            
            </form>
            </div>
            
        )
    }
} 


function mapStateToProps(state,ownProps,Id= ownProps.match.params.id){
    return {
       
    employees :state.employeeR.find(emp => {
        return parseInt(emp.Id,10) === parseInt(Id,10);
    })
};
}

function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators(employeeAction , dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps )(EmpEdit);
// export default EmpEdit;