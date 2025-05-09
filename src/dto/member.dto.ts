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
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           example: "홍길동"
 *         email:
 *           type: string
 *           format: email
 *           example: "user@example.com"
 *         password:
 *           type: string
 *           example: "1234"
 *         githubUrl:
 *           type: string
 *           example: "https://github.com/example"
 */
export class MemberCreateRequestDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  password!: string;

  @IsOptional()
  @IsString()
  githubUrl?: string;
}

//READ
/**
 * @swagger
 * components:
 *   schemas:
 *     MemberReadRequestDto:
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
 *         password:
 *           type: string
 *           example: "1234"
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
  password?: string;
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