"use client"
// Intersections - Unions
// http://localhost:3000/alone/exercise/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  type Developper = {
    name: string
  }

  type FrontEndDev = Developper & {
    frontEndFramework: string
  }

  type BackEndDev = Developper & {
    backEndFramework: string
  }

  type FullStackDev = FrontEndDev & BackEndDev

  const feDev: FrontEndDev = {
    name: "fe",
    frontEndFramework: "react",
  }

  const beDev: BackEndDev = {
    name: "be",
    backEndFramework: "nestjs",
  }

  const fsDev: FullStackDev = {
    name: "fs",
    frontEndFramework: "nextjs",
    backEndFramework: "nestjs",
  }

  displayText(`${feDev.name} utilise ${feDev.frontEndFramework} `)
  displayText(`${beDev.name} utilise ${beDev.backEndFramework} `)
  displayText(
    `${fsDev.name} utilise ${fsDev.frontEndFramework} et ${fsDev.backEndFramework}`
  )

  interface IDeveloper {
    name: string
  }

  interface IFrontEndDev extends IDeveloper {
    frontEndFramework: string
  }

  interface IBackEndDev extends IDeveloper {
    backEndFramework: string
  }

  interface IFullStackDev extends IFrontEndDev, IBackEndDev {}

  const ifeDev: IFrontEndDev = {
    name: "mike",
    frontEndFramework: "React",
  }

  const ibeDev: IBackEndDev = {
    name: "mike",
    backEndFramework: "Spring",
  }

  const ifsDev: IFullStackDev = {
    name: "mike",
    backEndFramework: "Spring",
    frontEndFramework: "React",
  }
  displayText(`${ifeDev.name} utilise ${ifeDev.frontEndFramework} `)
  displayText(`${ibeDev.name} utilise ${ibeDev.backEndFramework} `)
  displayText(
    `${ifsDev.name} utilise ${fsDev.frontEndFramework} et ${ifsDev.backEndFramework}`
  )

  type StudentDev = FrontEndDev | BackEndDev | FullStackDev

  const student1: StudentDev = {
    name: "john",
    frontEndFramework: "React",
  }
  displayText(`${student1.name} utilise ${student1.frontEndFramework} `)

  const student2: StudentDev = {
    name: "mike",
    backEndFramework: "Spring",
  }
  displayText(`${student2.name} utilise ${student2.backEndFramework} `)

  const student3: StudentDev = {
    name: "steeve",
    backEndFramework: "Spring",
    frontEndFramework: "React",
  }
  displayText(
    `${student3.name} utilise ${student3.frontEndFramework} et  ${student3.backEndFramework} `
  )

  /*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
