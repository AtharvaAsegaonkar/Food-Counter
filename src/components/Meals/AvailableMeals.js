import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Panner Butter Masala',
    description: 'Finest panner and veggies',
    price: 220.00,
  },
  {
    id: 'm2',
    name: 'Daal Tadka',
    description: 'A Indian specialty!',
    price: 166.5,
  },
  {
    id: 'm3',
    name: 'Bhendi fry',
    description: 'Crunchy Fingerchips dry',
    price: 200.99,
  },
  {
    id: 'm4',
    name: 'Tandoor',
    description: 'BUTTER ROTI...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
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