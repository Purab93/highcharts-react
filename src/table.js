import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {makeData} from './demo';

export default class TableWrapper extends React.Component{
    constructor() {
        super();
        this.state = {
            data: makeData()
        }
    }
    
    render(){
         
        const columns=[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },{
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },{
                    Header: "Visits",
                    accessor: "visits"
                },{
                    Header: "Relationship",
                    accessor:"status"
                }
              ]
            }
          ];

        const tabConfig = {
            showPagination: true,
            showPageSizeOptions: true,
            showPaginationTop: false,
            showPaginationBottom: true,
            pageSizeOptions : [ 5 , 10 , 20 , 25 , 50 ] ,      
            defaultPageSize: 5,
            sortable: true,
            multiSort: true
        };
        return (
            <div className="table-container col-md-12">
                <div className="table-header">Table Heading</div>
                <ReactTable
                    {...tabConfig}
                    data={this.state.data}
                    columns={columns}
                />
            </div>
        )
    }
}