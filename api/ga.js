function newGeneration(){
     calculateFitness();
     for(let i = 0; i < POPULATION; i++){
          bairds[i] = new Baird();
     }
}

function calculateFitness(){
     let sum = 0;
     for(let baird of bairds)
          sum += bairds.score;
     for(let baird of bairds)
          baird.fitness = baird.score / sum;
}