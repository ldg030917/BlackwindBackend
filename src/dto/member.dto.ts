import { IsDate, IsEmail, IsOptional, IsString } from "class-validator";

//CREATE
/**
 * @swagger
 * components:
 *   schemas:
 *     MemberCreateRequestDto:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - degree
 *       properties:
 *         name:
 *           type: string
 *           example: "홍길동"
 *         email:
 *           type: string
 *           format: email
 *           example: "user@example.com"
 *         profileText:
 *           type: string
 *           example: "안녕하세요!"
 *         githubUrl:
 *           type: string
 *           example: "https://github.com/example"
 *         imageUrl:
 *           type: string
 *           example: ""
 *         interests:
 *           type: string
 *           example: ""
 *         degree:
 *           type: string
 *           example: ""
 */
export class MemberCreateRequestDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsOptional()
  @IsString()
  profileText?: string;

  @IsOptional()
  @IsString()
  githubUrl?: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  interests?: string;

  @IsString()
  degree!: string;
}

//READ
/**
 * @swagger
 * components:
 *   schemas:
 *     MemberReadRequestDto:
 *       description: "이거 수정해야함"
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         name:
 *           type: string
 *           example: "홍길동"
 *         email:
 *           type: string
 *           format: email
 *           example: "example@example.com"
 *         githubUrl:
 *           type: string
 *           example: ""
 */
export class MemberReadRequestDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsOptional()
  @IsString()
  githubUrl?: string;
}

//UPDATE
/**
 * @swagger
 * components:
 *   schemas:
 *     MemberUpdateRequestDto:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "홍길동"
 *         email:
 *           type: string
 *           format: email
 *           example: "example@example.com"
 *         profileText:
 *           type: string
 *           example: "안녕하세요!"
 *         githubUrl:
 *           type: string
 *           example: "https://github.com/example"
 *         imageUrl:
 *           type: string
 *           example: ""
 *         interests:
 *           type: string
 *           example: ""
 *         degree:
 *           type: string
 *           example: ""
 */
export class MemberUpdateRequestDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  profileText?: string;

  @IsOptional()
  @IsString()
  githubUrl?: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  interests?: string;

  @IsOptional()
  @IsString()
  degree?: string;
}

//DELETE


//RESPONSE
/**
 * @swagger
 * components:
 *   schemas:
 *     MemberResponseDto:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         name:
 *           type: string
 *           example: "홍길동"
 *         email:
 *           type: string
 *           format: email
 *           example: "example@example.com"
 *         githubUrl:
 *           type: string
 *           example: ""
 */
export class MemberResponseDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsOptional()
  @IsString()
  githubUrl?: string;
}