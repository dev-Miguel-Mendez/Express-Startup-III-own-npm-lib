import { Request, Response } from 'express';
import { LoginSchemaType, SignupSchemaType } from '../../zodSchemas/user-schema.js';
import { BadRequest } from 'custom-exceptions-express';


export const signup = async (req: Request<{}, {}, SignupSchemaType>,res: Response) => {
	const { username, email, password } = req.body;


	const response: ServerResponse = { message: 'Success', success: true, data: { username, email, password } } 

	res.send(response );
};

export const signin = async (req: Request<{}, {}, LoginSchemaType>, res: Response) => {
	const { email, password } = req.body;
    
	const response: ServerResponse = { message: 'Success', success: true, data: { email, password } }

	res.send(response);
};

export const triggerBadRequest = async (_req: Request, _res: Response) => {
	
    throw new BadRequest('Bad request');

};

