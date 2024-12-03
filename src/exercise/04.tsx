"use client"
// Unknown props
// http://localhost:3000/alone/exercise/04.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  type Player = {
    id: string
    stats: string
  }

  interface Club {
    [key: string]: Player
  }

  // 🐶 Créé le club 'machesterUnited' avec 'cristianoRonaldo' et 'paulPogba'
  // 🐶 Créé le club 'psg' avec 'messi' et 'mbappe'
  const manchesterUnited = {
    cristianoRonaldo: { id: "342", stats: "50buts" },
    paulPogba: { id: "343", stats: "27buts" },
  }

  const psg = {
    messi: { id: "344", stats: "10buts" },
    mbappe: { id: "345", stats: "13buts" },
  }

  // ⛏️ Décommente le code ci-dessous pour afficher le nombre de joueur dans l'équipe
  //
  displayText(
    `Machester United nb player : ${Object.keys(manchesterUnited).length}`
  )
  displayText(`psg nb player : ${Object.keys(psg).length}`)

  /*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
