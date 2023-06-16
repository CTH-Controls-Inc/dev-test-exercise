// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { InputKeys, LoginData } from '@/const/types';
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod';

// a form of input arrays that can be shared by the front and back end to build the form
const FORM_INPUT_ARRAY: InputKeys[] = [InputKeys.EMAIL, InputKeys.PASSWORD]
const emailSchema = z.string().email();
const FAIL_TEST_EMAIL = 'fail@test.co'
const validationFunction = (email: string, password: string) => {
  // some kind of validation with email and password here
  if(email === FAIL_TEST_EMAIL) return {token: ''}
  const username = email.split("@")[0];
  
  return {token: 'random-token-valid', username}
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginData>
) {
  if (req.method === 'POST') {
    const { body } = req
    // go through the for input arrays, here it just checks that each field exists and that the field contains values. 
    FORM_INPUT_ARRAY.forEach((input) => {
      if (!body?.[input] || body[input].length === 0) res.status(400).json({ error: `Need to send an ${input}`, key: input })
      // check specific inputs after length checks, for email validation I'm using the Zod package to check that the email sent in matches the email
      if (input === InputKeys.EMAIL) {
        try { emailSchema.parse(body[input]); } catch (error) { res.status(400).json({ error: `Need to send a valid Email`, key: input }) }
      }
      // More rules can be added if needed (e.g. password length)
    })
    // a validation function to get the user info or a blank token for an invalid email/password combo
    const userData = validationFunction(req.body.email, req.body.password)
    if (userData.token.length === 0) res.status(400).json({ error: `Invalid Email/Password`, key: InputKeys.PASSWORD })
    // if we made it past the final check return a successful token to the front end
    res.status(200).json({ user: userData })
  }
  else {
    res.status(405).json({ error: 'route not supported' })

  }
}
