

// Claro, aquí está un ejemplo de carga de datos de un JSON en un componente de función:

// javascript
// Copy code
// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.example.com/data.json")
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []);

//   return (
//     <ul>
//       {data.map(item => (
//         <li key={item.id}>{item.name}</li>
//       ))}
//     </ul>
//   );
// }

// En este ejemplo, estamos usando el hook useState para mantener el estado de los datos cargados desde el JSON. También estamos usando el hook useEffect para realizar la carga de datos cuando el componente se monta. La segunda argumento del useEffect, un array vacío, significa que este efecto solo se ejecutará una vez, cuando el componente se monta.

/**
 
 import React, { useState, useEffect } from 'react';

const Example = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/path/to/data.json')
      .then(response => response.json())
      .then(jsonData => {
        setData(jsonData);
      });
  }, []);

  return (
    <div>
      {data === null ? (
        <p>Loading data...</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default Example;








import React, { useState, useEffect } from 'react';
import data from './data.json';

const Example = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div>
      {jsonData === null ? (
        <p>Loading data...</p>
      ) : (
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      )}
    </div>
  );
};

export default Example;

 
 */