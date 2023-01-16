import KnowledgeBankEntry from "@/data/mongoose/models/KnowledgeBankEntry";
import apiHandler from "@/utils/api/baseHandler";
import errorResponse from "@/utils/api/errorResponse";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * @api {post} /api/knowledge_bank/:id Increase the interest of a Knowledge Bank Item.
 * @apiName IncreaseKnowledgeBankEntryInterest
 * @apiGroup KnowledgeBank
 * 
 * @apiParam {String} [question] The question.
 * @apiParam {String} [answer] The answer to the question. 
 * @apiParam {String} [thumbnail] TA link to the thumbnail media.
 * @apiParam {String} [blogPost] A link to the Blog Post about this item.
 * 
 * @apiSuccess {Boolean} success Rather or not the request was executed successfully.
 * @apiSuccess {String} [message] Relevant information about the request, typically presented with a success=false response.
 * 
 * @apiDescription Modifies an existing entry in the Knowledge Bank to increase it's interest, used as a public API to allow sorting based on what users click on the most.
 */
async function postHandler(request: NextApiRequest, response: NextApiResponse) {
    const { id } = request.query
    try {
        const _id = new mongoose.Types.ObjectId(id as string)
        const result = await KnowledgeBankEntry.updateOne({ _id }, { $inc: { interest: 1 } })
        return response.json({ success: result.acknowledged })
    } catch (error: any) {
        return errorResponse(response, error)
    }
}

export default apiHandler(true, {  POST: postHandler })