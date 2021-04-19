import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Search {
  @PrimaryGeneratedColumn()
  public readonly id: number;
  @Column()
  public time: Date;
  @Column()
  public description: string;
  @Column()
  public location: string;
  @Column()
  public ipAddress: string;

  constructor(
    time: Date,
    description: string,
    location: string,
    ipAddress: string,
  ) {
    this.time = time;
    this.description = description;
    this.location = location;
    this.ipAddress = ipAddress;
  }
}
