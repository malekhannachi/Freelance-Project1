export class Analyse {
  constructor(
    public _id?: Number,
    public temperature?: Number,
    public densite?: Number,
    public matiereGrasse?: Number,
    public ESD?: Number,
    public congelation?: Number,
    public pourcentageEau?: Number,
    public acidite?: Number,
    public PH?: Number,
    public alcool?: String,
    public formol?: String,
    public testAmidon?: String,
    public antibiotique?: String,
    public GoutEtOdeur?: String,
    public fournisseur?: String,
    public camion?: String,
    public citerne?: String,
    // public malade?:[]
  ) {}
}
