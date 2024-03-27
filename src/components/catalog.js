import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'video', label: 'Відеоспостереження' },
  { value: 'domofonu', label: 'Домофони' },
  { value: 'signalization', label: 'Сигналізація' },
];

export const Catalog = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <h2>Каталог</h2>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
};
