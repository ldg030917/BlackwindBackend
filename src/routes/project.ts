import express, { Router, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import asyncHandler from "express-async-handler";
import { plainToInstance } from "class-transformer";
import { ProjectCreateRequestDto } from "../dto/project.dto";
import { validate } from "class-validator";
import { Project } from "../models/Project";

const router = Router();

/**
@swagger

 */
router.post("/", asyncHandler (async (req: Request, res: Response) => {
  const dto = plainToInstance(ProjectCreateRequestDto, req.body);
  const errors = await validate(dto);
  if (errors.length > 0) {
    res.status(400).json(errors);
    return;
  }

  const projectRepo = AppDataSource.getRepository(Project);
  const project = projectRepo.create(dto);
  await projectRepo.save(project);
  res.status(200).json();
}))