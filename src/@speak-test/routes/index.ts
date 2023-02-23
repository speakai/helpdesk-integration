import { Router } from 'express'; 
const routes = Router(); 

import testRoutes from './v1/test';
routes.use('/v1/test', testRoutes);

export default routes;