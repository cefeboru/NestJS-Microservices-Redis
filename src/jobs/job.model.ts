export class Job {
  constructor(
    public id: string,
    public type: string,
    public url: string,
    public created_at: string,
    public company: string,
    public company_url: string,
    public location: string,
    public title: string,
    public description: string,
    public how_to_apply: string,
    public company_logo: string,
  ) {}
}
