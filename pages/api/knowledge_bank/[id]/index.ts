import KnowledgeBankEntry from "@/data/mongoose/models/KnowledgeBankEntry";
import apiHandler from "@/utils/api/baseHandler";
import errorResponse from "@/utils/api/errorResponse";
import omitUndefinedKeys from "@/utils/database/omitUndefinedKeys";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * @api {post} /api/knowledge_bank/:id Modify an entry for the Knowledge Bank.
 * @apiName ModifyKnowledgeBankEntry
 * @apiGroup KnowledgeBank
 * 
 * @apiParam {String} [question] The question.
 * @apiParam {String} [answer] The answer to the question. 
 * @apiParam {String} [thumbnail] TA link to the thumbnail media.
 * @apiParam {String} [blogPost] A link to the Blog Post about this item.
 * 
 * @apiSuccess {Boolean} [success] Rather or not the request was executed successfully.
 * @apiSuccess {String} [message] Relevant information about the request, typically presented with a success=false response.
 * 
 * @apiDescription Modifies an existing entry in the Knowledge Bank.
 */
async function postHandler(request: NextApiRequest, response: NextApiResponse) {
    const { question, answer, thumbnail, blogPost } = request.body 
    const { id } = request.query
    try {
        const _id = new mongoose.Types.ObjectId(id as string)
        const changes = omitUndefinedKeys({ question, answer, thumbnail, blogPost })
        const result = await KnowledgeBankEntry.updateOne({ _id }, changes)
        // TODO: If the document was changed `result.matchedCount > 0` then we should revalidate pages that use this data. 
        return response.json({ success: result.acknowledged })
    } catch (error: any) {
        return errorResponse(response, error)
    }
}

export default apiHandler(true, {  POST: postHandler })