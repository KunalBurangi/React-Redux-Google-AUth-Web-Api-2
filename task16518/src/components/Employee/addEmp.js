import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as employeeAction from '../../actions/employeeActions';


class AddEmp extends Component{
    constructor(props){
        super(props);
       
        this.state = {
            name :"" ,
            Phone: "",
            Email: "",
            Dob: "",
            Country:"" ,
            Password: ""
            
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
        let AddData = {
            "name" : this.state.name,
            "Phone": this.state.phone,
            "Email": this.state.email,
            "Dob": this.state.dob,
            "Country": this.state.country,
            "Password": this.state.password,
        } 
        this.props.actions.AddOneEmp(AddData)
        .then(
            res => {
                this.props.actions.fetchAllEmployee();
            }
        );
    }

    render(){
        return(
            <div>
                <form  onSubmit = {this.handleSubmit} action="/employee">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputName">Name</label>
                        <input type="Name" className="form-control" id="inputName" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password"  value={this.state.password} name="password" onChange={this.handleChange} />
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
                <button type="submit" className="btn btn-primary float-right buttonedit">ADD</button>
                <button type="reset" className="btn btn-danger float-right ">Reset</button>
            
            </form>
            </div>
        )
    }
}

function mapStateToProps(state,ownProps){
    return {
       
    employees :state.employeeR
};
}

function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators(employeeAction , dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps )(AddEmp);
// export default AddEmp;