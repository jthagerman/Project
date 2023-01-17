import KnowledgeBankEntry from "@/data/mongoose/models/KnowledgeBankEntry";
import ensureConnection from "@/utils/database/connection";

export async function getKnowledgeBankEntries(
  limit: number = 50,
  offset: number = 0
) {
  try {
    if (await ensureConnection()) {
      const results = await KnowledgeBankEntry.find()
        .sort({ interest: -1 })
        .limit(Math.min(50, limit as number))
        .skip(Math.max(0, offset as number));

      return results.map((el) => {
        return { ...el?._doc, _id: el._id.toString() };
      });
    } else throw "Error Connecting To DB";
  } catch {
    return [];
  }
}
