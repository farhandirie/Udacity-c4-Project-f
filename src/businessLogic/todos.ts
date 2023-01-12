import { TodosAccess } from '../dataLayer/todosAcess'
import { AttachmentUtils } from '../helpers/attachmentUtils';
import { TodoItem } from '../models/TodoItem'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'
import { createLogger } from '../utils/logger'
import * as uuid from 'uuid'
import * as createError from 'http-errors'
import { constants } from 'fs';
import { promises } from 'dns';

// TODO: Implement businessLogic
const logger = createLogger('TodosAccess')
const attachmentUtils=new AttachmentUtils()
const todosAcess= new TodosAccess()

//write create to function
export async function createTodo(
 newTodo: CreateTodoRequest,
 userId: string
):Promise<TodoItem>{
    logger.info('create to function called')
    const todoId=uuid.v4()
    const createdAt = new Date().toISOString()
    const s3attachmentUrl=attachmentUtils.getAttachmentUrl(todoId)
    const newItem={
        userId,
        todoId,
        createdAt,
        done: false,
        attachmentUrl: s3attachmentUrl,
        ...newTodo
    }
    return await todosAcess.createTodoItem(newItem)

}
