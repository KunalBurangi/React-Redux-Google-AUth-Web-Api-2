import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as employeeAction from '../../actions/employeeActions';
// import employeeReducer from '../../reducers/employeeReduser';
import configureStore from '../../store/configureStore';
import {fetchAllEmployee} from '../../actions/employeeActions'
import { NavLink } from 'react-router-dom';
import Header from '../../common/Header';


class Employee extends Component {
    constructor(props){
        super(props);

        this.state = {
            pageOfItems: []  
        };
 
        this.handleDelete =this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.myFunction = this.myFunction.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    componentWillMount(){
    
    }

    handleDelete(empId){
        
        this.props.actions.deleteOneEmp(empId)
        .then(
            res => {
                this.props.actions.fetchAllEmployee();
            }
        );

    }

    handleEdit(empId){
        // this.props.actions.EditOneEmp(empId)
        // .then();
    }

    myFunction() {
        var input, filter, table, tr, td, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase(); 
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    render(){
        const allEmp = this.props.employees
       console.log(allEmp);
       
    return (
        <div>
            <Header />
            <h6 className="Signoutalig pull-right">Welcome {JSON.parse(sessionStorage.getItem('userName'))} !</h6>
            
        <div className="mb-4">Employee Details.</div>

        <datalist Id="empName" >
       { allEmp.map(emp => {
           return(
        
            <option value={emp.Name}/>
       )
        })}
         </datalist > 
         <div className="form-group">
         <div className="row">
        <NavLink to="/addEmp" className = "btn btn-primary col-md-2">Add Employee</NavLink> &nbsp;&nbsp;
       <input type="text" list="empName" className="form-control col-md-6" placeholder="Search Name" id="myInput" onChange={this.myFunction}/> &nbsp; &nbsp;
         <button class="btn btn-primary col-md-2" onClick={this.myFunction}>Search</button> 
         </div></div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td />
                </tr>
            </thead>
           
            <tbody id="myTable">
                {
                 
                   allEmp.map(emp => {
                        return(
                            <tr >
                                <td>{emp.Id}</td>
                                <td>{emp.Name}</td>
                                <NavLink to={`/edit/${emp.Id}`}  >Edit  </NavLink>
                    &nbsp;  | &nbsp;   <a style={{ cursor: 'pointer', color : '#007BFF' }} onClick={() => this.handleDelete(emp.Id)}>Delete</a>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table> 
        {/* <Pagination items={allEmp} onChangePage={this.onChangePage} /> */}
        </div>
    )
}}

function mapStateToProps(state,ownProps){
   debugger;
    return {
       
    employees :state.employeeR
};
}

function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators(employeeAction , dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee);