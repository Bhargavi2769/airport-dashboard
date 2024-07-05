import React, { Component } from 'react';
import { TableView, TableHeader, TableBody, Column, Row, Cell, ActionButton, Checkbox, Flex, Heading, Button } from '@adobe/react-spectrum';
import Edit from '@spectrum-icons/workflow/Edit';
import Delete from '@spectrum-icons/workflow/Delete';
import '../App.css';

class AirportList extends Component {
  render() {
    return (
      <div className="airport-list">
        <Flex direction="row" alignItems="center" justifyContent="space-between" marginBottom="size-200">
          <Heading level={4}>Airports</Heading>
          <Button variant="cta">Add New</Button>
        </Flex>
        <TableView aria-label="Airport list">
          <TableHeader>
            <Column><Checkbox isSelected={false} /> All Airports</Column>
            <Column>Country</Column>
            <Column>Code</Column>
            <Column>Terminals</Column>
            <Column></Column>
          </TableHeader>
          <TableBody>
            {this.renderRow('Indira Gandhi International Airport', 'India', 'DEL', 3)}
            {this.renderRow('Dubai International Airport', 'UAE', 'DXB', 5)}
            {this.renderRow('Heathrow Airport', 'England', 'LHR', 6)}
            {this.renderRow('Istanbul Airport', 'Turkey', 'IST', 3)}
            {this.renderRow('Rajiv Gandhi International Airport', 'Texas', 'DFW', 14)}
          </TableBody>
        </TableView>
      </div>
    );
  }

  renderRow(airport, country, code, terminals) {
    return (
      <Row key={code}>
        <Cell><Checkbox /> {airport}</Cell>
        <Cell>{country}</Cell>
        <Cell>{code}</Cell>
        <Cell>{terminals}</Cell>
        <Cell>
          <Flex direction="row" gap="size-100">
            <ActionButton isQuiet aria-label="Edit">
              <Edit />
            </ActionButton>
            <ActionButton isQuiet aria-label="Delete">
              <Delete />
            </ActionButton>
          </Flex>
        </Cell>
      </Row>
    );
  }
}

export default AirportList;

