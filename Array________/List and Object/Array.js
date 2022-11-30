import React from 'react'

function Myarray() {

  const Yooo = ['Jalaya','saman','Lomid']

  const names = [
    {
      id:1,
      name:'Sajith',
      skill:'python'
    },
    {
      id:2,
      name:'Kumara',
      skill:'Java'
    },
    {
      id:3,
      name:'Gushan',
      skill:'React'
    }
  ]
 
  const List = names.map(Gas => <h1 key={Gas.id}>I am {Gas.name}. my ID is {Gas.id}. My current skill is {Gas.skill}</h1>)

  const Nlist = Yooo.map(nam => <h4>{nam}</h4>)

  const Listwithkey = Yooo.map((nam,index)=><h3 key={index}>{index} : {nam}</h3>)

  return (
    <div>
      <div>
        <h1>++++++++++++++ Array Method 1 +++++++++++++++++++++++</h1>
          <h4>{Yooo[0]}</h4>
          <h4>{Yooo[1]}</h4>          
          <h4>{Yooo[2]}</h4>
        <h1>++++++++++++++ Array Method 2 +++++++++++++++++++++++</h1>
          {Nlist}
        <h1>++++++++++++++ Increment With index ++++++++++++++++++</h1>
        {Listwithkey}

      </div>  
      <div>
        <h1>-------------Object-------------------</h1>
        {
                names.map(names => 
                  <h1 key={names.id}>
                    I am {names.name}. my ID is {names.id}. My current skill is {names.skill}
                  </h1>)
        }
         <h1>-------------Object List variable-------------------</h1>
        {List}
      </div> 

    </div>

  )
}

export default Myarray