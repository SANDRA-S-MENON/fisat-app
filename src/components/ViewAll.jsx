import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data, changeData]=useState(
        [
            {
                "_id": "66651683741a512717d92b87",
                "firstname": "Manu",
                "lastname": "R",
                "college": "FISAT",
                "dob": "02/04/1999",
                "course": "B-Tech Comp Science",
                "mobile": "+91 95266 7443",
                "email": "aa@gmail.com",
                "address": "Kochi",
                "__v": 0
            },
            {
                "_id": "666516bc741a512717d92b88",
                "firstname": "Rahul",
                "lastname": "D",
                "college": "FISAT",
                "dob": "02/01/1992",
                "course": "MCA",
                "mobile": "+91 95266 74440",
                "email": "aa@gmail.com",
                "address": "Test Address",
                "__v": 0
            }
        ]
    )
    return (
        <div>
            <NavBar/>
            <h1><center>STUDENT LIST</center></h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">firstname</th>
                                    <th scope="col">lastname</th>
                                    <th scope="col">college</th>
                                    <th scope="col">dob</th>
                                    <th scope="col">course</th>
                                    <th scope="col">mobile</th>
                                    <th scope="col">email</th>
                                    <th scope="col">address</th>
                                </tr>
                            </thead>
                            {data.map(
                                (value, index)=>{
                                    return <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                    </tr>
                                   
                                    
                                </tbody>
                                }
                            )

                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll