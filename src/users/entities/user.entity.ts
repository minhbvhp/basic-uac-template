import Role from 'src/roles/roles.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @Column({ default: 2 })
  roleId: number;

  @Column({
    unique: true,
    nullable: true,
  })
  session: string;
}

export default User;
