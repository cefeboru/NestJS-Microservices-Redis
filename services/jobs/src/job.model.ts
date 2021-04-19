import { ApiProperty } from "@nestjs/swagger";

export class Job {
  @ApiProperty()
  public id: string;
  @ApiProperty()
  public type: string;
  @ApiProperty()
  public url: string;
  @ApiProperty()
  public created_at: string;
  @ApiProperty()
  public company: string;
  @ApiProperty()
  public company_url: string;
  @ApiProperty()
  public location: string;
  @ApiProperty()
  public title: string;
  @ApiProperty()
  public description: string;
  @ApiProperty()
  public how_to_apply: string;
  @ApiProperty()
  public company_logo: string;
  
  
  constructor(
    id: string,
    type: string,
    url: string,
    created_at: string,
    company: string,
    company_url: string,
    location: string,
    title: string,
    description: string,
    how_to_apply: string,
    company_logo: string,
  ) {
    this.id = id;
    this.type = type;
    this.url = url;
    this.created_at = created_at;
    this.company = company;
    this.company_url = company_url;
    this.location = location;
    this.title = title;
    this.description = description;
    this.how_to_apply = how_to_apply;
    this.company_logo = company_logo;
  }
}
