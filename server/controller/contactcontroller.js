import Messages from "../model/contactmodel.js";
import bodyParser from "body-parser";


const ContactForm = async (req, res) => {
  
  const { Name, Email, Message } = req.body;
  console.log(Name, Email, Message);
  const data = new Messages({
    name: Name,
    email: Email,
    message: Message,
  });
  const result = await data.save();
if(result){
  res.send("data inserted");
}
 else{
  res.send("data not inserted");
 }
};


export default ContactForm;
