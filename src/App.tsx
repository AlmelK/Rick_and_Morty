import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EpizodeList from './components/EpizodeList';
import { EpisodeProps, Episode } from './types/types';

const App = () => {
  const [episodes, setEpisode] = useState<Episode[]>([])

  useEffect(() => {
    getEpisodes()
  }, [])

  async function getEpisodes() {
    try {
      const response = await axios.get<EpisodeProps>('https://rickandmortyapi.com/api/episode')
      setEpisode(response.data.results)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <EpizodeList episodes={episodes} />
    </div>
  )
}

export default App;
