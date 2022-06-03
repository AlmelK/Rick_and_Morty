import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EpizodeList from './components/EpizodeList';
import { getEpizodeProps, IEpizode } from './types/types';

const App = () => {
  const [epizodes, setEpizode] = useState<IEpizode[]>([])

  useEffect( () => {
      getEpizodes()
  }, [])

  async function getEpizodes() {
    try {
      const response = await axios.get<getEpizodeProps>('https://rickandmortyapi.com/api/episode')
      setEpizode(response.data.results)
    } catch(e) {
      alert(e)
    }
  }

  return (
    <div>
      <EpizodeList epizodes={epizodes} />
    </div>
  )
}

export default App;
