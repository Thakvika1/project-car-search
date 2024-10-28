import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  const dispatch = useDispatch();

  // Logic search
  const cars = useSelector(({ cars: { data, searchTerm } }) => {
    return data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCar = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          onClick={() => handleCarDelete(car)}
          className="button is-danger"
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="car-list">
      {renderedCar}
      <hr />
    </div>
  );
}

export default CarList;
