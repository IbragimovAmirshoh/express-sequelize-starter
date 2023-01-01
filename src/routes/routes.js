import { Router } from 'express';
const router = Router();

// Routes

export default router.get('/g', (req, res) => res.json(req));
