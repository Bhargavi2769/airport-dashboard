import React, { Component } from 'react';
import { Flex, Heading,View, ActionButton, Button, Divider, TextField, Picker, Item, TextArea, Dialog, DialogTrigger, Content, Header, Footer } from '@adobe/react-spectrum';
import Edit from '@spectrum-icons/workflow/Edit';
import logo from '../logo.svg';

import '../App.css';

class AirportPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false
    };
  }

  openDialog = () => {
    this.setState({ isDialogOpen: true });
  };

  closeDialog = () => {
    this.setState({ isDialogOpen: false });
  };

  render() {
    return (
      <div className="airport-page">
        <Heading level={5}>Airports {">"} Indira Gandhi International Airport</Heading>
        <Heading level={1}>Indira Gandhi International Airport</Heading>
        <Flex direction="row" gap="size-200" marginY="size-200">
          <Button variant="primary">Terminals</Button>
          <Button variant="secondary">Transport</Button>
          <Button variant="secondary">Contact Details</Button>
        </Flex>
        <Divider size="S" />
        <Flex direction="column" gap="size-120" marginY="size-200" justifyContent="space-between" alignContent="center">
          <Flex direction="row" justifyContent="space-between" alignItems="center" marginY="size-150" wrap>
            <Flex direction="row" gap="size-100">
              <View flex>
                <img
                  src={logo}
                  alt="Terminal 1"
                  style={{ width: '6vw', height: '12vh', objectFit: 'cover' }}
                />
              </View>
              <View flex>
                <Heading level={1}>Terminal 1</Heading>
                <p>Optional metadata should be two lines.</p>
              </View>
            </Flex>
            <Flex direction="row" gap="size-100">
              <View flex>
                <img
                  src={logo}
                  alt="Terminal 2"
                  style={{ width: '6vw', height: '12vh', objectFit: 'cover' }}
                />
              </View>
              <View flex>
                <Heading level={1}>Terminal 2</Heading>
                <p>Optional metadata should be two lines.</p>
              </View>
            </Flex>
            <View flex>
                <Button variant="primay" style="outline" onPress={this.openDialog}>+ Add Terminal</Button>
            </View>
          </Flex>
          
        </Flex>
        <Heading level={3}>Services</Heading>
        <Flex direction="column" gap="size-200" marginY="size-200">
          <Heading level={4}>Lost & Found</Heading>
          <Divider size="S" />
          <Flex direction="row" gap="size-200" alignItems="space-between">
            <Flex direction="row" gap="size-200" alignItems="start" wrap>
              <TextField label="Service Name" placeholder="Lost & found" />
              <Picker label="Category" placeholder="Select a category">
                <Item key="category1">Category 1</Item>
                <Item key="category2">Category 2</Item>
              </Picker>
              <Picker label="Sub Category" placeholder="Select a sub category">
                <Item key="subcategory1">Sub Category 1</Item>
                <Item key="subcategory2">Sub Category 2</Item>
              </Picker>
              <ActionButton>Upload Image</ActionButton>
              <ActionButton>Show Image</ActionButton>
            </Flex>
            <TextArea label="Description" placeholder="Type here" />
            <Flex>
              <Button variant="accent">Save</Button>
            </Flex>
          </Flex>
        </Flex>
        
        <Heading level={4}>Lounge</Heading>
        <Divider size="S" />
        <Heading level={4}>Money Exchange</Heading>
        <Divider size="S" />

        <DialogTrigger isOpen={this.state.isDialogOpen} onOpenChange={this.closeDialog}>
          <></>
          <Dialog>
            <Heading>Terminal Title</Heading>
            <Content>
              <TextField label="Title" placeholder="Enter terminal title" />
              <Heading level={4}>Description</Heading>
              <TextArea placeholder="Enter terminal description" />
            </Content>
            <Footer>
              <Button variant="primary" onPress={this.closeDialog}>Upload Image</Button>
              <Button variant="secondary" onPress={this.closeDialog}>Cancel</Button>
              <Button variant="cta">Continue</Button>
            </Footer>
          </Dialog>
        </DialogTrigger>
      </div>
    );
  }
}

export default AirportPage;

