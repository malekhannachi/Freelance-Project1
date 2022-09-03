export class Fournisseur {
  constructor(
    public id?: Number,
    public firstName?: String,
    public lastName?: String,
    public email?: String,
    public cin?: Number,
    public number?: Number,
    public street?: String,
    public city?: String,
    public country?: String,
    public zipCode?: Number,
    public milkPrice?:Number
  ) {}
}
