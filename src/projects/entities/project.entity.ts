import { Column, Entity, PrimaryColumn } from 'typeorm'

export enum ProjectStatus {
  Pending = 'pending'
  Active = 'active'
  Cancelled = 'cancelled'
}

@Entity()
export class Project {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  started_at: Date

  @Column()
  cancelled_at: Date

  @Column()
  forecasted_at: Date

  @Column()
  status
}
