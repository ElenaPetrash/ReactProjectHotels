import { createElement } from "react"

let contactInfo = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]
const Footer = () => {
   
    return (
        <ul>
             {contactInfo.map(
                    (item) => 
                    (<li>{item}</li>)
                )}
        </ul>
    )
}
export default Footer