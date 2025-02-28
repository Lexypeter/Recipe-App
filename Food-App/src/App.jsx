import { Component, useState } from 'react'
import Search from './Components/Search'
import FoodList from './Components/Foodlist'
import Nav from './Components/Nav'
import "./App.css"
import Container from './Components/Container'
import InnerContainer from './Components/InnerContainer'
import FoodDetails from './Components/FoodDetails'




function App() {
  const [foodId, setFoodId] = useState("716429")
  const [foodData, setFoodData] = useState([])

  return (
    <div className="App">
      <Nav/>
     <Search foodData = {foodData} setFoodData ={setFoodData}/>
    
     <Container>
      <InnerContainer>
         <FoodList foodData = {foodData} setFoodId={setFoodId} />
      </InnerContainer>
      <InnerContainer> 
        <FoodDetails foodId={foodId}/> 
        </InnerContainer>
     </Container>
    </div>
  )
}

export default App
