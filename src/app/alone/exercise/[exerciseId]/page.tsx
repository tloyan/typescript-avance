import Content from "@/components/content"
import { getCurrentDirectory } from "@/lib/helpers"
import { getExerciceById } from "@/lib/practices/exercices"
import { notFound } from "next/navigation"

const Page = async ({
  params,
}: {
  params: {
    exerciseId: string
  }
}) => {
  const { exerciseId } = params

  if (!exerciseId) {
    notFound()
  }
  const directory = getCurrentDirectory()
  const exercice = await getExerciceById(exerciseId, directory)

  return <Content practice={exercice} practiceType={"exercise"} />
}

export default Page