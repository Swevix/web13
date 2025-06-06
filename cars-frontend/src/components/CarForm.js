
import React, { useState } from 'react';

function CarForm({ onAddCar }) {
  // 1. Состояние каждого поля формы и ошибок
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState({});

  // 2. Функция validate() проверяет данные формы перед отправкой
  const validate = () => {
    const errs = {};
    // Проверяем, что title не пустое
    if (!title.trim()) errs.title = 'Название не может быть пустым';
    // Проверяем, что price — это число ≥ 0
    if (price === '' || isNaN(price) || Number(price) < 0) {
      errs.price = 'Цена должна быть числом ≥ 0';
    }
    return errs; // вернёт объект вида { title: '...', price: '...' } либо {}
  };

  // 3. handleSubmit вызывается при нажатии «Submit»
  const handleSubmit = (e) => {
    e.preventDefault(); // предотвратить перезагрузку страницы

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      // Если есть ошибки, сохраняем в состояние и выходим
      setErrors(validationErrors);
      return;
    }

    // 4. Если валидация успешна — формируем объект новой машины
    const newCar = {
      id: Date.now(),              // генерируем простой уникальный id
      title: title.trim(),
      description: description.trim(),
      price: Number(price),
    };
    onAddCar(newCar); // поднимаем состояние наверх (из App.js)

    // 5. Сбрасываем форму после успешного добавления
    setTitle('');
    setDescription('');
    setPrice('');
    setErrors({});
  };

  return (
    <form className="car-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Название:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          // Если валидация показала ошибку для title, добавляем класс 'invalid'
          className={errors.title ? 'invalid' : ''}
        />
        {/* Если ошибка по title есть — показываем текст снизу */}
        {errors.title && <div className="error-text">{errors.title}</div>}
      </div>

      <div className="form-group">
        <label>Описание:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Цена:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={errors.price ? 'invalid' : ''}
        />
        {errors.price && <div className="error-text">{errors.price}</div>}
      </div>

      <button type="submit" className="btn-submit">
        Добавить автомобиль
      </button>
    </form>
  );
}

export default CarForm;