import { IsDate, IsEmail, IsOptional, IsString } from "class-validator";

/**
 * @swagger
 * components:
 *   schemas:
 *     ProjectCreateRequestDto:
 *       type: object
 *       required:
 *         - name
 *         - link
 *       properties:
 *         name:
 *           type: string
 *           description: 생성할 프로젝트 이름
 *         link:
 *           type: string
 *           format: url
 *           description: 생성한 프로젝트의 링크 주소
 *         imageUrl:
 *           type: string
 *           format: url
 *           description: 생성한 프로젝트의 대표 이미지 url
 */
export class ProjectCreateRequestDto {
  @IsString()
  name!: string;

  @IsString()
  link!: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ProjectReadRequestDto:
 *       type: object
 *       properties:
 */
export class ProjectReadRequestDto {
}

export class ProjectUpdateRequestDto {
  
}