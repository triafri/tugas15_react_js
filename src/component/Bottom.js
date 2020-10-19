import React from 'react';
import { Grid, Feed, Icon, Container, Comment, Header, Form, Button } from 'semantic-ui-react';


function Bottom() {
    return (
             <Container>
             <>
                <Grid style={{ marginTop: '20px' }}>
                    <Grid.Column floated='left' width={5}>
                        <Comment.Group threaded>
                            <Header as='h3' dividing>
                                Comments
                            </Header>

                            <Comment>
                                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                                <Comment.Content>
                                    <Comment.Author as='a'>Satria</Comment.Author>
                                    <Comment.Metadata>
                                        <div>Today at 5:42PM</div>
                                    </Comment.Metadata>
                                    <Comment.Text>
                                        <p>Haloo...!</p>
                                    </Comment.Text>
                                    <Comment.Actions>
                                        <Comment.Action>Reply</Comment.Action>
                                    </Comment.Actions>
                                </Comment.Content>

                                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                <Comment.Content>
                                    <Comment.Author as='a'>Danang</Comment.Author>
                                    <Comment.Metadata>
                                        <div>Today at 5:50PM</div>
                                    </Comment.Metadata>
                                    <Comment.Text>
                                        <p>Kerjakan Sesuatu Semampu Kamu</p>
                                    </Comment.Text>
                                    <Comment.Actions>
                                        <Comment.Action>Reply</Comment.Action>
                                    </Comment.Actions>
                                </Comment.Content>
                                <Comment.Group>
                                    <Comment>
                                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                                        <Comment.Content>
                                            <Comment.Author as='a'>Ricky</Comment.Author>
                                            <Comment.Metadata>
                                                <div>Just now</div>
                                            </Comment.Metadata>
                                            <Comment.Text>Kmu Sekarang Dimana Danang?</Comment.Text>
                                            <Comment.Actions>
                                                <Comment.Action>Reply</Comment.Action>
                                            </Comment.Actions>
                                        </Comment.Content>
                                    </Comment>
                                </Comment.Group>

                                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                                <Comment.Content>
                                    <Comment.Author as='a'>Joe</Comment.Author>
                                    <Comment.Metadata>
                                        <div>1 days ago</div>
                                    </Comment.Metadata>
                                    <Comment.Text>
                                        <p>Terimakasih Atas Nasihatnya</p>
                                    </Comment.Text>
                                    <Comment.Actions>
                                        <Comment.Action>Reply</Comment.Action>
                                    </Comment.Actions>
                                </Comment.Content>
                            </Comment>

                            <Form reply>
                                <Form.TextArea />
                                <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                            </Form>
                        </Comment.Group>
                    </Grid.Column>

                    <Grid.Column floated='right' width={5}>
                        <Feed>
                            <Feed.Event>
                                <Feed.Label>
                                    <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary>
                                        <Feed.User>Anton</Feed.User> added you as a friend
                                            <Feed.Date>3 Hour Ago</Feed.Date>
                                    </Feed.Summary>
                                    <Feed.Meta>
                                        <Feed.Like>
                                            <Icon name='like' />4 Likes
                                            </Feed.Like>
                                    </Feed.Meta>
                                </Feed.Content>
                            </Feed.Event>

                            <Feed.Event>
                                <Feed.Label>
                                    <Icon pencil alternate />
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary>
                                        You submitted a new post to the page
                                            <Feed.Date>3 days ago</Feed.Date>
                                    </Feed.Summary>
                                    <Feed.Extra images>
                                        Saya senang Belajar Bahasa Pemrograman
                                        </Feed.Extra>
                                    <Feed.Meta>
                                        <Feed.Like>
                                            <Icon name='like' />11 Like
                                            </Feed.Like>
                                    </Feed.Meta>
                                </Feed.Content>
                            </Feed.Event>

                            <Feed.Event>
                                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                                <Feed.Content>
                                    <Feed.Date>4 days ago</Feed.Date>
                                    <Feed.Summary>
                                        David added 2 new Image
                                        </Feed.Summary>
                                    <Feed.Extra images>
                                        <a>
                                            <img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' />
                                        </a>
                                        <a>
                                            <img src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' />
                                        </a>
                                    </Feed.Extra>
                                    <Feed.Meta>
                                        <Feed.Like>
                                            <Icon name='like' />
                                                2 Likes
                                            </Feed.Like>
                                    </Feed.Meta>
                                </Feed.Content>
                            </Feed.Event>
                        </Feed>
                    </Grid.Column>
                </Grid>
                </>
            </Container>
    )
}

export default Bottom;