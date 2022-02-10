export interface Persona {
    id: number;
    usuario: string;
    password: string;
    name: string;
    surname: string;
    company_email: string;
    personal_email: string;
    city: string;
    active: boolean;
    created_date: Date;
    imagen_url: string;
    termination_date: Date;
}

export class PersonaWhat {

    static personaDesdeJson(obj: any) {  //obj: Object
        return new PersonaWhat(
            obj['id'],
            obj['usuario'],
            obj['password'],
            obj['name'],
            obj['surname'],
            obj['company_email'],
            obj['personal_email'],
            obj['city'],
            obj['active'],
            obj['created_date'],
            obj['imagen_url'],
            obj['termination_date']
        );
    }

    

    constructor(
        public id:               number,
        public usuario:          string,
        public password:         string,
        public name:             string,
        public surname:          string,
        public company_email:    string,
        public personal_email:   string,
        public city:             string,
        public active:           boolean,
        public created_date:     Date,
        public imagen_url:       string,
        public termination_date: Date,
    ) { }

}