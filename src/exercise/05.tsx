"use client"
// Unknown props
// http://localhost:3000/alone/exercise/04.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  // ✔️ Début de l'exercice
  type InputDate = string | number | Date
  // ce qui donne
  function printBirthDay(year: number, month: number, day: number): string
  function printBirthDay(year: number, month: number): string
  function printBirthDay(year: number): string
  function printBirthDay(inputDate: Date): Date
  function printBirthDay(inputDate: string): string
  function printBirthDay(
    inputDate: InputDate,
    m?: number,
    d?: number
  ): string | Date {
    if (inputDate instanceof Date) {
      return inputDate
    } else if (typeof inputDate === "string") {
      return new Date(inputDate).toLocaleDateString()
    } else if (d !== undefined && m !== undefined) {
      return new Date(inputDate, m, d).toLocaleDateString()
    } else if (m !== undefined) {
      return new Date(inputDate, m, 1).toLocaleDateString()
    } else if (typeof inputDate === "number") {
      return new Date(inputDate, 0, 1).toLocaleDateString()
    } else {
      return "Non définie"
    }
  }
  // ⛏️ Décommente le code ci-dessous pour afficher les dates
  //
  displayText(`${printBirthDay("October 13, 2014")}`)
  displayText(`${printBirthDay(new Date(2014, 9, 13)).toLocaleDateString()}`)

  /*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
