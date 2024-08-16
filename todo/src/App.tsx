import axios from "axios"
import { useEffect, useState } from "react"
// import { ProductSimplified } from "./types/apiTypes/detailsProps"

function App() {
// const [apidata, setData] = useState<ProductSimplified []> ([])
// const [error, setError] = useState< string | null >(null)
const [toDo, setToDo] = useState({
  name: '',
  status: false
})
// const [donTodo, setDonTodo] = useState([])

// const updatedData = () => {
// setDonTodo((...prevData) => [data: toDo])
// }

// useEffect(()=>{
// axios.get('https://dummyjson.com/products')
// .then(response =>setData(response.data.products))
// .catch(error => setError(error.error));
// }, [])
const createToDo = (e:React.ChangeEvent<HTMLInputElement>)=>{
const {name, value} = e.target
setToDo((prevToDo)=>({
  ...prevToDo,
  [name]: value,
}))
}


const postTodDo = async (e:React.FormEvent<HTMLButtonElement>)=>{
  e.preventDefault()
  if(!toDo.name){
    return alert("Cnnot add empty field");
  }
  try{
    await axios.post('https://dummyjson.com/products/add',
      {
        title: toDo.name,
      }

    )
    console.log(toDo, 'first')
    setToDo({
      name: '',
      status: true
    })
    


  }
  catch(error){
    alert("Failed to add To Do")
  }
}

// useEffect(()=>{
// axios.post('https://dummyjson.com/products/add',{
//     title: 'BMW Pencil',
// })
// .then((response)=> {
//   console.log(response.data)
// })

// .catch((error) => {
//   console.log(error.message)
// });

// },[])

  return (
    <>
    <h1 className="text-red-700">Testing Axios get</h1>
    <input 
    name="name" 
    type="text"
     placeholder="Your to do"
     value={toDo.name}
    onChange={createToDo}
     required
      />
    <button onClick={postTodDo}>Add</button>
    {/* {
      apidata.map((item: ProductSimplified,id: number)=>{
        return(
          <p key={id}>{item.price}</p>
        )
      })
    } */}
    </>
  )
}

export default App
