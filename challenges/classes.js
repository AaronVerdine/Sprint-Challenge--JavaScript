// 1. Copy and paste your prototype in here and refactor into class syntax.
// function  CuboidMaker(props) {
//     this.length = props.length;
//     this.width = props.width;
//     this.height = props.height
//     this.volume = function () {
//       return (props.length * props.width * props.height);
//     };
//     this.surfaceArea = function () {
//       return 2 * (props.length * props.width + props.length * props.height + props.width * props.height);
//     };
//   }

  class CuboidMaker2{
      constructor(length,width, height) {
        this.length = length;
        this.width = width;
        this.height = height
      }

      volume() {
        return (this.length * this.width * this.height)
      };

      surfaceArea() {
        return 2 * (this.length *  this.width +  this.length * this.height + this.width * this.height);
      };
  }

const cuboid2 = new CuboidMaker2(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.