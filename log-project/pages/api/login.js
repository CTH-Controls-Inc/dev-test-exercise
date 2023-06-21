export default function handler(req,res){

    if(req.method === 'POST'){

      // Extract the email and password from the request body
      const {email, password} = req.body;
      
      //Perform server-side validations 
      if (!isValidEmail(email)){
        res.status(400).json({error: 'Invalid email address'});
        return;
      }

      // Perform authentication logic
      if (authenticateUser(email,password)){
        //Successful login
        res.status(200).json({message: 'Login successful'});
      } else{
        //Invalid credentials
        res.status(401).json({error:'Invalid email or password'});
      }
    }else{
        //Invalid HTTP method 
        res.status(405).end();
    }
}

// helper function to validate email format
function isValidEmail(email){
    const re2 = /^[^\s@]+@[^\s@]+\[^\s@]+$/;
    return re2.test(email);

}

// Helper function to authentication the user
function authenticateUser(email,password){
    // perofrms authenication
    // const exampleUser= {
    //     //email: ,
    //     //password"
    // }
      return true;
}
    //Compare the provided email and password for the user in the datbase
    // if(email === exampleUser && password === exampleUser){

    //     return true;
    // }else{
    //         return false;
    //     }
    // }