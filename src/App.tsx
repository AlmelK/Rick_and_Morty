import { useStore } from "effector-react";
import { SetStateAction, useEffect } from "react";
import EpisodeTable from "./components/EpisodeTable";
import { $episodes_store, fetchEpisodes } from "./store/Episodes";
import './App.css'
import Tabs from "./components/Tabs";


const App = () => {
  return (
    <div>
      <Tabs />
    </div>
  )
}

export default App;
