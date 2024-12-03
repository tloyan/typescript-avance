"use client"
// Unknown props
// http://localhost:3000/alone/exercise/04.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  // ✔️ Début de l'exercice

  // 🐶 Modifie le type Configuration pour que 'data' soit générique et que l'on puisse
  // y mettre un array de Type (array de string, array de number etc ...)
  type Configuration<T, M> = {
    name: string
    protocol: string
    hostname: string
    ip: string
    port: number
    data: T[]
    metaData: M
  }
  // 🐶 Adapte cette déclation pour que 'data' soit un array de string
  const config: Configuration<string, string> = {
    name: "connexion",
    protocol: "HTTPS",
    hostname: "google.com",
    ip: "192.168.0.1",
    port: 80,
    data: ["secure", "open"],
    metaData: "meta",
  }
  // 🐶 Adapte cette déclation pour que 'data' soit un array d'objet
  const config2: Configuration<object, string> = {
    name: "connexion",
    protocol: "HTTPS",
    hostname: "google.com",
    ip: "192.168.0.1",
    port: 80,
    data: [{ secure: true }, { open: true }],
    metaData: "",
  }

  function makePair<T extends Configuration<any, any>>(arg: T): [T, T] {
    return [arg, arg]
  }

  // const p = makePair("mike") //p de type [string, string]
  // const p2 = makePair(2) //p de type [number, number]

  const pconfig = makePair(config2)

  /*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
