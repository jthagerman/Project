import KnowledgeBankEntry from "@/data/mongoose/models/KnowledgeBankEntry";
export async function getKnowledgeBankEntries(
  limit: number = 50,
  offset: number = 0
) {
  const results = await KnowledgeBankEntry.find()
    .sort({ interest: -1 })
    .limit(Math.min(50, limit as number))
    .skip(Math.max(0, offset as number));

  return results;
}
