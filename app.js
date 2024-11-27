const app = new PIXI.Application();

document.body.appendChild(app.view);

const rocket = PIXI.Sprinte.from('assets/rocket.png');

app.stage.addChild(rocket);
