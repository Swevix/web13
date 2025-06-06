
import React, { useState } from 'react';
import CarList from './components/CarList';
import CarForm from './components/CarForm';
import './components/styles.css';

function App() {
  // 2.1. Исходные тестовые данные: массив объектов «автомобиль»
  // Это позволит сразу проверить сортировку/пагинацию. В реальном приложении эти данные шли бы с сервера.
  const [cars, setCars] = useState([
    { id: 1, title: 'Toyota Camry',   description: 'Надёжный седан.',        price: 25000 },
    { id: 2, title: 'Mazda CX-5',    description: 'Стильный кроссовер.',    price: 28000 },
    { id: 3, title: 'BMW 3-Series',  description: 'Премиальный седан.',     price: 40000 },
    { id: 4, title: 'Tesla Model 3', description: 'Электромобиль будущего.', price: 45000 },
    { id: 5, title: 'VW Golf',       description: 'Легендарный хэтчбек.',   price: 22000 },
    { id: 6, title: 'Audi A4',       description: 'Удобный бизнес-класс.',   price: 38000 },
  ]);

  // 2.2. Функция для добавления нового автомобиля в «локальный стейт»
  const handleAddCar = (newCar) => {
    setCars((prevCars) => [...prevCars, newCar]);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Список автомобилей</h1>

      {/* 4.1. Рендерим компонент CarForm и передаём ему колбэк onAddCar */}
      <CarForm onAddCar={handleAddCar} />

      {/* 3.1. Рендерим компонент CarList, передаём проп cars */}
      <CarList cars={cars} />
    </div>
  );
}

export default App;