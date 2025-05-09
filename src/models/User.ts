import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })  //이름
  name: string;

  @Column({ unique: true, length:255 })   //이메일
  email: string;

  @Column({ select: false })  //기본적으로 조회 시 비밀번호 안나옴, 해싱 프로세스 추가할 것
  password: string;

  @CreateDateColumn()
  createdAt: Date;
}