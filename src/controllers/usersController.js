const userController = {};
const User = require('../models/User');


userController.signUp = async (req, res) => {
    const error = [];   
    const {name, email,password} = req.body;
    
    
    if(name == ""){
        error.push({
        text: 'Name undefined'
    })
        
    }if(email == ""){
        error.push({
            text: 'E-mail undefined'
        })
        
    }
    if(password == ""){
        error.push({
            text: 'Password undefined'
        });
        
    }
        if(error.length > 0 ) {
            console.log(error);
            res.send("Erro create User");
        } else {            
        const newUser = new User({
            name, email, password
        });    
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            res.send('User Create')

    }
}


userController.signIn = (req, res) => {
    res.send('Page of SignIn');
}

userController.renderSignUp = (req, res) => {
    res.send("Page of RendersignUp");
}

userController.renderSignIn = (req, res) => {
    res.send("Page of RendersignIn");
}




module.exports = userController;