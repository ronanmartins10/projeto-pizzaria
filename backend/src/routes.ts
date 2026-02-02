import { Router, Request, Response } from 'express';
import { CreateUserController} from './controllers/user/CreateUserController';
import { validateSchema } from './middlewares/validate.Schema';
import { createUserSchema } from './schemas/userSchema';

const router = Router();

router.post("/users", validateSchema(createUserSchema), new CreateUserController().handle);


export { router } ; 

//Arquitetura em camadas  //! ROUTES-CONTROLLER-SERVICE