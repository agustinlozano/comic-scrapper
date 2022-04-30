import fs from 'fs-extra'
import axios from 'axios'

const INITIAL_ID_XKCD_COMIC = 2550
const MAX_ID_XKCD_COMICS = 2613

for (let comicID = INITIAL_ID_XKCD_COMIC; comicID < MAX_ID_XKCD_COMICS; comicID++) {
  const url = `https://xkcd.com/${comicID}/info.0.json`
  const { data }= await axios.get(url)
  const { num, news, transcript, ...restOfData } = data
  const comicToStore = {
    comicID,
    ...restOfData
  }
  
  console.log(restOfData)

  await fs.writeJSON(`./comics/${comicID}.json`, comicToStore)
}