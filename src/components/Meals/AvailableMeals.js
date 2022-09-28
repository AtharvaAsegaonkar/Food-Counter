import Card from '../UI/Card';
import React,{useEffect,useState} from 'react';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const AvailableMeals = () => {
  const [meals,setMeals] =useState([])
  const [isLoading,setIsLoading] =useState(true)
  const [error,setError] =useState();

  useEffect (() => {

    const fetchmeals= async()=>{
    const responce = await fetch("https://too-hungry-29241-default-rtdb.firebaseio.com/meals.json")

    if(!responce.ok){
      throw new Error("Something got wrong") 
    }


     const responsedata = await responce.json ();

     const loadedMeals = []

      for (const key in responsedata) {
        loadedMeals.push({
          id:key, 
          name:responsedata[key].name, 
          description:responsedata[key].description, 
          price:responsedata[key].price, 

        })
      }
      setMeals(loadedMeals);
      setIsLoading(false);
  }
  try {
    fetchmeals()
    
  } catch (error) {
    setIsLoading(false);
    setError(error.message)
    
  }
  },[])

  if(isLoading) {
    return(
    <div className={classes.mealsloading}> 
    <p>Loading...</p>
    </div>)
  }


  const mealsList= meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;