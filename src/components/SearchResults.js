import FakeBookings from "../data/fakeBookings.json"
import moment from "moment";

const SearchResults = () =>{

  //let checkInDate = new Date(FakeBookings.person.checkInDate);
  //let checkOutDate = new Date(FakeBookings.person.checkOutDate);
  //let allNigth = checkOutDate.getTime() - checkInDate.getTime()
  //let night = allNigth/(1000*60*60*24)  
  //console.log(night)
  //const diffInDays = moment(FakeBookings.person.checkOutDate, 'DD.MM.YYYY').diff(moment(FakeBookings.person.checkInDate, 'DD.MM.YYYY'), 'days');
  
  return <div class="table-responsive">
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">FirstName</th>
        <th scope="col">LastName</th>
        <th scope="col">email</th>
        <th scope="col">RoomId</th>
        <th scope="col">CheckInDate</th>
        <th scope="col">CheckOutDate</th>
        <th scope="col">Nigth</th>
      </tr>
    </thead>
    <tbody>

      { 
        FakeBookings.map((person) => <tr key = {person.id} className="" >
        <td scope="row">{person.id}</td>
        <td scope="row">{person.title}</td>
        <td scope="row">{person.firstName} </td>
        <td scope="row">{person.surname}</td>
        <td scope="row">{person.email}</td>
        <td scope="row">{person.email}</td>
        <td scope="row">{person.roomId}</td>
        <td scope="row">{person.checkInDate}</td>
        <td scope="row">{person.checkOutDate}</td>
        <td scope="row">{(new Date(person.checkOutDate).getTime() - new Date (person.checkInDate).getTime())/(1000*60*60*24)}</td>
        
        </tr>
        )
        }
      
     /</tbody>
     
    </table>
  </div>
  ///id, title, first name, surname, email, room id, check in date and check out date.
}


export default SearchResults
