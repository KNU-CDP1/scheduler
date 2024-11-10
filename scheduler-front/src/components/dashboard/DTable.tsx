import { Table, Text } from "@chakra-ui/react";
import React from "react";

const DTable: React.FC<DTableProps> = ({flightData}) => {
    return (
        <Table.Root mt={4}>
            <Table.Header className="table-header">
                <Table.Row border={"1px white"}>
                <Table.ColumnHeader><Text>Flight</Text></Table.ColumnHeader>
                <Table.ColumnHeader><Text>Passengers</Text></Table.ColumnHeader>
                <Table.ColumnHeader><Text>Seats</Text></Table.ColumnHeader>
                <Table.ColumnHeader><Text>Cost</Text></Table.ColumnHeader>
                <Table.ColumnHeader><Text>Departure</Text></Table.ColumnHeader>
                <Table.ColumnHeader><Text>Arrival</Text></Table.ColumnHeader>
                <Table.ColumnHeader><Text>Weather</Text></Table.ColumnHeader>
                <Table.ColumnHeader><Text>Risk</Text></Table.ColumnHeader>
                <Table.ColumnHeader><Text>Status</Text></Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            
            <Table.Body>
                {flightData.map((data, idx) => (
                <Table.Row key={idx} className="table-row">
                    <Table.Cell>{data.flight}</Table.Cell>
                    <Table.Cell>{data.passengers}</Table.Cell>
                    <Table.Cell>{data.seats}</Table.Cell>
                    <Table.Cell>${data.cost}</Table.Cell>

                    {/* Departure Time */}
                    <Table.Cell className={data.status === "Delayed" ? "status-delayed" : ""}>
                    {data.departure}
                    </Table.Cell>

                    {/* Arrival Time */}
                    <Table.Cell className={data.status === "Completed" ? "status-completed" : ""}>
                    {data.arrival}
                    </Table.Cell>

                    {/* Weather with temperature */}
                    <Table.Cell>{data.weather}</Table.Cell>

                    {/* Risk bar */}
                    <Table.Cell display="flex" alignItems="center">
                    {data.risk}%
                    {/* Example of a simple progress bar */}
                    <div style={{ width:"100px", marginLeft:"8px", backgroundColor:"#ccc", height:"6px", borderRadius:"4px"}}>
                        <div style={{ width:`${data.risk}%`, backgroundColor:data.risk >50?"red":"green", height:"100%", borderRadius:"4px"}}></div>
                    </div>
                    </Table.Cell>

                    {/* Status with different colors or badges */}
                    <Table.Cell>{data.status}</Table.Cell>
                </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    );
};

export default DTable;