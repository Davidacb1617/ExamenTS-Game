// Generic function to randomly select an event
export function getRandomEvent() {
    // Array of possible event types
    const eventTypes = [
        "Choque" /* EventType.Collision */,
        "Meteorito" /* EventType.Meteorite */,
        "Agujero Negro" /* EventType.BlackHole */,
        "Ataque Alien\u00EDgena" /* EventType.AlienAttack */,
    ];
    // Choose a random event type from the array
    const randomEventType = eventTypes[Math.floor(Math.random() * eventTypes.length)];
    // Return the random event
    return randomEventType;
}
export class Event {
    constructor(name, spaceship) {
        this.name = name;
        this.spaceship = spaceship;
    }
}
