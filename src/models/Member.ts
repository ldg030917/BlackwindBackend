import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

/**
@swagger
components:
  schemas:
    Member:
      type: object
      required:
        - id
        - name
        - email
        - password
      properties:
        id:
          type: integer
          description: 멤버 고유 id
          example: 1
        name:
          type: string
          description: 이름
          example: "홍길동"
        email:
          type: string
          format: email
          description: 이메일
          example: "user@example.com"
        password:
          type: string
          description: 비밀번호
          example: "1234"
        profileText:
          type: string
          description: 프로필 텍스트
          example: "안녕하세요, 홍길동입니다."
        githubUrl:
          type: string
          format: url
          description: 깃허브 url
          example: "https://github.com/example"
        createdAt:
          type: string
          format: date-time
          description: 생성일시
          example: "2025-05-10T12:00:00Z"
 */
@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })  //이름
  name: string;

  @Column({ unique: true, length:255 })  //이메일
  email: string;

  @Column({ select: false })  //기본적으로 조회 시 비밀번호 안나옴, 해싱 프로세스 추가할 것
  password: string;

  @Column({ nullable: true, length: 255 })  //프로필 메시지
  profileText?: string;

  @Column({ nullable: true, length: 255 })  //깃허브 url
  githubUrl?: string;
  
  @CreateDateColumn()
  createdAt: Date;
}