import { useEffect, useState } from 'react';

function App() {
  const [id, setId] = useState('deatiger')
  const [name, setName] = useState('')
  const ids = ['deatiger', 'gaearon', 'aws', 'facebook']
  const getRamdomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }

  useEffect(() => {
    fetch('https://api.github.com/users/${id}')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setName(data.neme)
    })
    .catch(error => {
      console.error(error)
    })
  }, [id])
  return (
    <div>
      <p>{id}の、Github上の名前は{name}です。</p>
      <button onClick={getRamdomId}>IDを変更</button>
    </div>
  );
}

export default App;
