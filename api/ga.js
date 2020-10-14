
function newGeneration(){
     console.log("Generation")
     let parent1 = savedBairds.pop();
     let parent2 = savedBairds.pop();
     savedBairds = [];
     let brain = crossOver(parent1[0], parent2[0]);
     for(let i = 0; i < POPULATION; i++){
          let b = brain.copy();
          b.mutate(0.1);
          bairds[i] = new Baird(b);
     }
     wall = new Wall();
}

function crossOver(parent1, parent2){  
     let child_ih = Matrix.subtract(parent2.brain.weights_ih, parent1.brain.weights_ih);
     child_ih.multiply(randomGaussian(0, 0.1));
     let child_ho = Matrix.subtract(parent2.brain.weights_ho, parent1.brain.weights_ho);
     child_ho.multiply(randomGaussian(0, 0.1));

     let bias_h = Matrix.subtract(parent2.brain.bias_h, parent1.brain.bias_h);
     let bias_o = Matrix.subtract(parent2.brain.bias_o, parent1.brain.bias_o);

     let newBrain = parent1.brain.copy();
     newBrain.weights_ih.add(child_ih);
     newBrain.weights_ho.add(child_ho);
     newBrain.bias_h.add(bias_h);
     newBrain.bias_o.add(bias_o);
     return newBrain;
}