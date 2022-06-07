import { useStore } from "effector-react";
import { useEffect } from "react";
import EpisodeTable from "./components/EpisodeTable";
import { $episodes_store, fetchEpisodes } from "./store/Episodes";


const App = () => {
  useEffect(() => {
    fetchEpisodes()
  }, []);

  const episodes = useStore($episodes_store)

  return (
    <div>  
      <EpisodeTable episodes={episodes} />
    </div>
  )
}

export default App;
