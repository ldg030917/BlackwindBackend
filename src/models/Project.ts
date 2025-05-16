import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * @swagger
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       required:
 *         - id
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: 프로젝트 고유 id
 *           example: 1
 *         name:
 *           type: string
 *           description: 프로젝트 이름
 *           example: "현풍전산 프로젝트"
 *         link:
 *           type: string
 *           format: url
 *           description: 프로젝트 주소 링크
 *           example: "https://project.com"
 *         imageUrl:
 *           type: string
 *           format: url
 *           description: 프로젝트 사진 링크
 *           example: "https://image.com"
 */
@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id!: Number;

  @Column({ length: 100 })
  name!: String;

  @Column({ length: 200 })
  link!: string;

  @Column({ nullable: true })
  imageUrl?: string;
}