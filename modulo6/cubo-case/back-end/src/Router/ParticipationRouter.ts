import { Router } from "express";
import ParticipationController from "../Controller/ParticipationController";

export const ParticipationRouter = Router()

ParticipationRouter.post('/insert', ParticipationController.insert)
ParticipationRouter.get('/select', ParticipationController.select)
ParticipationRouter.put('/update', ParticipationController.update)
ParticipationRouter.delete('/delete', ParticipationController.delete)

