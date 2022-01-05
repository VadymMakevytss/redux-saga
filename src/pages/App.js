import {useSelector} from 'react-redux';

function App() {
  const people = useSelector(state => state.people);

  console.log(people)

  return (
    <>
      <div>
        <h1>Star wars people</h1>
      </div>
      {people.loading ? 
        <p>Loading ...</p>:
        (
          <table border={1} width="100%" cellSpacing={0} cellPadding={2}>
            <thead>
              <tr>
                <th>Name</th>
                <th>birth year</th>
                <th>eye color</th>
                <th>gender</th>
                <th>hair color</th>
                <th>height</th>
              </tr>
            </thead>
            <tbody>
              {people.data.results.map(item => {
                return (
                   <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.birth_year}</td>
                    <td>{item.eye_color}</td>
                    <td>{item.gender}</td>
                    <td>{item.hair_color}</td>
                    <td>{item.height}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )
      }
    </>
  );
}

export default App;
