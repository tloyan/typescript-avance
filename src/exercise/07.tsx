"use client"
// Unknown props
// http://localhost:3000/alone/exercise/04.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  // ✔️ Début de l'exercice

  class Game {
    title: string
    category: string
    price: number
    pegi: string
    studio: string
    hardware: string[]

    constructor(
      title: string,
      category: string,
      price: number,
      pegi: string,
      studio: string,
      hardware: string[]
    ) {
      this.title = title
      this.category = category
      this.price = price
      this.pegi = pegi
      this.studio = studio
      this.hardware = hardware
    }

    isPC() {
      return this.hardware.includes("PC")
    }

    getDiscount() {
      return 0.8 * this.price
    }

    addToBDD(db: Array<Game>) {
      db.push(this)
    }
  }

  const fifa = new Game("fifa", "sport", 79, "public", "EA", ["PC", "WII"])
  const mario = new Game("mario", "platform", 59, "public", "Nintendo", ["WII"])

  // ⛏️ décommente pour afficher les jeux à l'écran
  displayText(
    `Le jeu : ${fifa.title} est compatible pc ? ${fifa.isPC() ? " oui" : "non"}`
  )
  displayText(
    `Le jeu : ${mario.title} est compatible pc ? ${
      mario.isPC() ? " oui" : "non"
    }`
  )

  const db: Game[] = []

  fifa.addToBDD(db)
  mario.addToBDD(db)

  displayText(`${db.length}`)

  /*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
