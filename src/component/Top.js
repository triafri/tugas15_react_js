import React from 'react';
import { Container, Icon, Input, Label, Menu, Table } from 'semantic-ui-react';

function Top() {
    return (
        <Container style={{ marginTop: '20px' }}>
            <Table celled>
                <Table.Header >
                    <Table.Row style={{ textAlign: 'right' }}>
                        <Table.HeaderCell colSpan={2}><Input icon='search' placeholder='Search...' /></Table.HeaderCell>
                    </Table.Row>
                    <Table.Row style={{ textAlign: 'center' }}>
                        <Table.HeaderCell >Nama Document</Table.HeaderCell>
                        <Table.HeaderCell >Jenis File</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Label ribbon>Panduan Belajar Javascript</Label>
                        </Table.Cell>
                        <Table.Cell style={{ textAlign: 'center' }}>PDF</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Panduan Belajar CSS</Table.Cell>
                        <Table.Cell style={{ textAlign: 'center' }}>PDF</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Panduan Belajar React JS</Table.Cell>
                        <Table.Cell style={{ textAlign: 'center' }}>PDF</Table.Cell>
                    </Table.Row>
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </Container>
    )
}


export default Top;