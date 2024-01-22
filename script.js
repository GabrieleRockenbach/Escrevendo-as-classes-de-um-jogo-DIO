class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.attackType = "";
    }

    attack() {
        switch (this.type) {
            case "mago":
                this.attackType = "magia";
                break;
            case "guerreiro":
                this.attackType = "espada";
                break;
            case "monge":
                this.attackType = "artes marciais";
                break;
            case "ninja":
                this.attackType = "shuriken";
                break;
        }
        console.log(`O ${this.name} atacou usando ${this.attackType}`);
    }
}
let hero = new Hero("Prym", 26, "mago");

hero.attack();