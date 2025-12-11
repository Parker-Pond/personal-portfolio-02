// this is going to be a pop up message that is going to have a custom message
//that is determined by the endpoint so if i send out a link it will be custom
import Modal from "../../utils/Modal.tsx" 
export default function Pop_up_message(){
// pull the company name from the URL and display their custom message 

let company_name = "PLACEHOLDER VALUE"
try {
    // send comapny name to bakend to see if there that company exists 
    
    const message_for_company_from_API_response = "message"
} catch (error) {
    //if error then a default message will display
}
return (<><p>This will eventualy have some data in it</p></>)
}