import React from 'react';
import TableWrapper from './table'

export default class TabStats extends React.Component{
    render(){
        return (
            <div className="table-stats-container">
                <TableWrapper />
                <TableWrapper />
            </div>
        )
    }
}