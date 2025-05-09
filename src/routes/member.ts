import { Router, Request, Response, RequestHandler } from "express";
import { MemberCreateRequestDto, MemberResponseDto, MemberUpdateRequestDto } from "../dto/member.dto";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { AppDataSource } from "../data-source";
import { Member } from "../models/Member";
import asyncHandler from "express-async-handler";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: member
 *   summary: 현풍전산 멤버
 *   description: 멤버 추가 수정 삭제 조회
 */

/**
 * @swagger
 * /member:
 *   post:
 *     tags:
 *       - member
 *     summary: 멤버 등록
 *     description: post로 멤버 등록
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/MemberCreateRequestDto"
 */
router.post('/', asyncHandler(async (req: Request, res: Response) => {    //trycatch 대신 asyncHandler 사용
  const dto = plainToInstance(MemberCreateRequestDto, req.body);   //req.body를 dto로 변환
  const errors = await validate(dto);  //dto 유효성 검사
  if (errors.length > 0) {
    //유효하지 않으면 400 error와 에러 response
    res.status(400).json(errors);
    return;
  }
  const memberRepo = AppDataSource.getRepository(Member);
  const member = memberRepo.create(dto);
  await memberRepo.save(member);
  res.status(200).json(member);
}));

/**
 * @swagger
 * /member:
 *   get:
 *     tags: 
 *       - member
 *     summary: 멤버 데이터 전체 조회
 *     responses:
 *       "200":
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/MemberResponseDto"
 */
router.get("/", asyncHandler(async (req: Request, res: Response) => {    //모든 멤버 리스트 요청
  const memberRepo = AppDataSource.getRepository(Member);
  const members = await memberRepo.find();
  const response = plainToInstance(MemberResponseDto, members);
  res.status(200).json(response);
}));

/**
 * @swagger
 * /member/{id}:
 *   get:
 *     tags:
 *       - member
 *     summary: 특정 멤버 데이터 조회
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 멤버의 고유 id
 *         schema:
 *           type: integer
 *     responses:
 *       "200":
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/MemberResponseDto"
 */
router.get("/:id", asyncHandler(async (req: Request, res: Response) => {
  const memberRepo = AppDataSource.getRepository(Member);
  const member = await memberRepo.findOne({where: 
    { id: Number(req.params.id) }
  });
  const response = plainToInstance(MemberResponseDto, member);
  if (!member) {
    res.status(404).json({ message: "Member not found" });
    return;
  }
  res.status(200).json(response);
}));

/**
 * @swagger
 * /member/{id}:
 *   put:
 *     tags:
 *       - member
 *     summary: 특정 멤버 데이터 수정
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/MemberUpdateRequestDto"
 *     responses:
 *       "200":
 *         description: 수정 성공
 *       "404":
 *         description: id에 해당하는 멤버 없음
 */
router.put("/:id", asyncHandler(async (req: Request, res: Response) => {
  const dto = plainToInstance(MemberUpdateRequestDto, req.body);
  const errors = await validate(dto);
  if (errors.length > 0) {
    res.status(400).json(errors);
    return;
  }
  const memberRepo = AppDataSource.getRepository(Member);
  const member = await memberRepo.findOne({ where: { id: Number(req.params.id) } });
  if (!member) {
    res.status(404).json({ message: "Member not found" });
    return;
  }
  Object.assign(member, dto);
  await memberRepo.save(member);
  res.status(200).json();
}));

router.delete("/:id", asyncHandler(async (req: Request, res: Response) => {
  
}));

export default router;