import KnowledgeBankEntry from "@/data/mongoose/models/KnowledgeBankEntry";
import apiHandler from "@/utils/api/baseHandler";
import errorResponse from "@/utils/api/errorResponse";
import omitUndefinedKeys from "@/utils/database/omitUndefinedKeys";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * @api {OBJECT} KnowledgeBankEntry KnowledgeBankEntry
 * @apiGroup Custom Types
 * @apiVersion 0.0.1
 * @apiParam {String} _id The ID.
 * @apiParam {String} question The question.
 * @apiParam {String} answer The answer to the question. 
 * @apiParam {String} [thumbnail] A link to the thumbnail media.
 * @apiParam {String} [blogPost] A link to the Blog Post about this item.
 */


/**
 * @api {get} /api/knowledge_bank Request entries from the knowledge bank.
 * @apiName GetKnowledgeBankEntries
 * @apiGroup KnowledgeBank
 * 
 * @apiParam {Number=10} limit The amount of entries to return.
 * @apiParam {Number=0} offset The amount of entries to skip (for pagination purposes).
 * 
 * @apiSuccess {Boolean} success Rather or not the request was executed successfully.
 * @apiSuccess {[KnowledgeBankEntry](#api-Custom_Types-KnowledgeBankEntry)} data The KnowledgeBankEntries 
 * @apiSuccess {String} [message] Relevant information about the request, typically presented with a success=false response.
 * 
 * @apiDescription Returns paginated entries from the knowledge bank sorted by their user interest.
 */
async function getHandler(request: NextApiRequest, response: NextApiResponse) {
    let { limit = 10, offset = 0 } = request.query;
    limit = Number(limit) || 10
    offset = Number(offset) || 0
    
    try { 
        const results = await KnowledgeBankEntry.find()
            .sort({ 'interest': -1 })
            .limit(Math.min(50, limit as number))
            .skip(Math.max(0, offset as number))

        return response.json({ success: true, data: results });
    } catch (error: any) {
        return errorResponse(response, error)
    }

}

/**
 * @api {post} /api/knowledge_bank Create an entry for the Knowledge Bank.
 * @apiName CreateKnowledgeBankEntry
 * @apiGroup KnowledgeBank
 * 
 * @apiParam {String} question The question.
 * @apiParam {String} answer The answer to the question. 
 * @apiParam {String} [thumbnail] TA link to the thumbnail media.
 * @apiParam {String} [blogPost] A link to the Blog Post about this item.
 * 
 * @apiSuccess {Boolean} success Rather or not the request was executed successfully.
 * @apiSuccess {[KnowledgeBankEntry](#api-Custom_Types-KnowledgeBankEntry)} data The created KnowledgeBankEntry 
 * @apiSuccess {String} [message] Relevant information about the request, typically presented with a success=false response.
 * 
 * @apiDescription Created a new entry in the Knowledge Bank.
 */
async function postHandler(request: NextApiRequest, response: NextApiResponse) {
    const { question, answer, thumbnail, blogPost } = request.body 
    try {
        const document = omitUndefinedKeys({ question, answer, thumbnail, blogPost})
        const result = await KnowledgeBankEntry.create(document)
        // TODO: If created, `result._id exists` we should revalidate relevant pages. 
        return response.json({ success: true, data: result })
    } catch (error: any) {
        return errorResponse(response, error)
    }
}

export default apiHandler(true, { GET: getHandler, POST: postHandler })