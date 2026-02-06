import { Router, Request, Response } from 'express';
import { CreateUserController} from './controllers/user/CreateUserController';
import { validateSchema } from './middlewares/validate.Schema';
import { createUserSchema, authUserSchema } from './schemas/userSchema';
import { AuthUserController } from './controllers/user/AuthUserController';

const router = Router();

// Rotas users
router.post("/users", validateSchema(createUserSchema), new CreateUserController().handle);
router.post("/session", validateSchema(authUserSchema), new AuthUserController().handle);


export { router } ; 

//Arquitetura em camadas = ROUTES-CONTROLLER-SERVICE