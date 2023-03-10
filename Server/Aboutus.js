import React from 'react'
import {Segment, Grid, Button, Checkbox, Comment, Container,Popup, Form} from 'semantic-ui-react'

const Aboutus= () =>

(
<div>
  <Container>
    <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={5}>
            <h3>DKV-SANGAM KEELKATTALAI</h3>
            <h3>Contact details:</h3>
            <h3>Address info:</h3> 
          </Grid.Column>
          
         

          <Grid.Column width={5}>

      
           <text align = "left">
          <Form type="flex" action="/send_email" method="post">
    <Form.Field>
      <label> Name:</label>
      <input type="text" name="name" placeholder='Enter your Name' id="name" required />
    </Form.Field>
    <Form.Field>
      <label>From:</label>
      <input type="email" name="from" placeholder="Email Address" id='from' required/>
    </Form.Field>
    <Form.Field>
        <label>subject:</label>
        <input type="text" name="subject" id="subject" placeholder="Subject"></input>
        </Form.Field> 
    <Form.Field>
      <label>Phone no:</label>
      <input placeholder='Phone number' />
    </Form.Field>
  </Form>
  </text></Grid.Column>
  
  <Grid.Column width={5}>
    <Comment.Group>
            <Comment.Content>
          <Form action="/send_email" method="post"><label><h3>Member's query</h3></label>
            <Form.TextArea  placeholder='Please leave your message here' type="text" id="message" name="message" required/>
            <input type="submit" style="background-color: rgb(78, 209, 230);" value="send"/>
               <Form.Field>
               <h5>Please click the submit button before click the terms and conditions check box.</h5>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Popup
      trigger={<Button type='submit' color='blue'>Submit</Button>}
      content='Terms and Conditions agreements allow you to establish what constitutes appropriate activity on your site or app, 
      empowering you to remove abusive users and content that violates your guidelines.
       Asserting your claim to the creative assets of your site in your terms and conditions will prevent ownership disputes and copyright infringement.
       If a user lodges a legal complaint against your business, showing that they were presented with clear terms and conditions before they used your site will help you immensely in court.'
      on='click'
      hideOnScroll
    />
 
          </Form>
        </Comment.Content>
    </Comment.Group> </Grid.Column>
      </Grid.Row>
      </Grid>
     
    </Segment>
      </Container>

      

</div>
)


export default Aboutus

