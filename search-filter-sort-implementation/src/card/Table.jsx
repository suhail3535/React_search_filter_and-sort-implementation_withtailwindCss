import React from 'react'
import "./style/index.css"

const Table = () => {
  return (
    <div>
          <table style={{ border:"1px soild black" }}>
              <thead>
                  <tr>
                      <th>Sr.no</th>
                      <th>Name</th>
                      <th>Model</th>
                      <th>Milage</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1</td>
                      <td>Maruti</td>
                      <td>2023</td>
                      <td>18km/hr</td>
                  </tr>

              </tbody>
      </table>
    </div>
  )
}

export default Table
