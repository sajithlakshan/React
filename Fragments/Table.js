import React, { Component } from 'react'
import MYcolums from './Colums'

class Table extends Component {
  render() {
    return (
      <table>
        <tbody>
            <tr>
               <MYcolums/>
            </tr>
        </tbody>
      </table>
    )
  }
}
export default Table
