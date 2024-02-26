import express from "express";
const router = express.Router();
import  ContactForm  from "../controller/contactcontroller.js";

router.route("/contact").post(ContactForm);


export default router