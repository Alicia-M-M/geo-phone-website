import React from 'react';
import { Table } from 'reactstrap';

function TwoColumnTable(props) {
    return (
        <>
            <Table responsive hover className="tableStyling">
                <thead>
                    <tr>
                        <th></th>
                        {props.tableTitles.map(title => <th className="text-center text-xl-left">{title}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">DIMENTIONS</th>
                        {props.tableDimentions.map(title => <td className="text-center text-xl-left">{title}</td>)}
                    </tr>
                    <tr>
                        <th scope="row">MATERIAL</th>
                        {props.tableMaterial.map(title => <td className="text-center text-xl-left">{title}</td>)}
                    </tr>
                    <tr>
                        <th scope="row">ECO FRIENDLY</th>
                        {props.tableEco.map(title => <td className="text-center text-xl-left">{title}</td>)}
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default TwoColumnTable;