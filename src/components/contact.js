import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@material-ui/core'
import LocationMap from './locationmap'

export default function Contact () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  // const [invalidEmail, setInvalidEmail] = useState(true)
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const sendMessage = (event) => {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        console.log('SUCCESS')
      } else {
        console.log('ERROR')
      }
    }
    xhr.send(data)
  }
  return (
    <Box>
      <Typography variant='h4'>Have a question or suggestion?</Typography>
      <Typography>Get in touch with me.</Typography>
      <form action='https://formspree.io/xwkrpvez' method='POST' onSubmit={sendMessage}>
        <TextField
          required
          id='name'
          variant='outlined'
          type='text'
          name='name'
          label='Name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          required
          id='email'
          type='email'
          name='email'
          variant='outlined'
          label='Email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          /* error={invalidEmail}
          helperText={invalidEmail ? '' : 'Enter Valid Email Id'} */
        />
        <TextField
          id='subject'
          type='text'
          name='subject'
          variant='outlined'
          label='Subject'
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
        <TextField
          required
          id='message'
          type='text'
          name='message'
          multiline
          rows={5}
          variant='outlined'
          label='Message'
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <Button type='submit' color='primary'>
                    Send Message
        </Button>
      </form>
      <Box height={300}>
        <LocationMap />
      </Box>
    </Box>
  )
}
