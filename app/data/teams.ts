import RedBullCar from "../assets/cars/red-bull-car.avif"
import Ferrari from "../assets/cars/ferrari-car.avif"
import Mclaren from "../assets/cars/mclaren-car.avif"
import Mercedes from "../assets/cars/mercedes-car.avif"
import AstonMartin from "../assets/cars/aston-martin-car.avif"
import Alpine from "../assets/cars/alpine-car.avif"
import Hass from "../assets/cars/haas-car.avif"
import Williams from "../assets/cars/williams-car.avif"
import RB from "../assets/cars/rb-car.avif"
import Sauber from "../assets/cars/kick-sauber-car.avif"

export const teams = [
  {
    teamId: "red_bull",
    team: "Red Bull",
    //team: "Red Bull Racing Honda RBPT",
    carImage: RedBullCar,
    chassis: "RB20",
    colour: "rgb(54, 113, 198)",
  },
  {
    teamId: "mclaren",
    team: "McLaren Mercedes",
    carImage: Mclaren,
    chassis: "MCL38",
    colour: "rgb(255, 128, 0)",
  },
  {
    teamId: "ferrari",
    team: "Ferrari",
    carImage: Ferrari,
    chassis: "SF-24",
    colour: "rgb(232, 0, 32)",
  },
  {
    teamId: "mercedes",
    team: "Mercedes",
    carImage: Mercedes,
    chassis: "W15",
    colour: "rgb(39, 244, 210)",
  },
  {
    teamId: "aston_martin",
    //team: "Aston Martin Aramco Mercedes",
    team: "Aston Martin Mercedes",
    carImage: AstonMartin,
    chassis: "AMR24",
    colour: "rgb(34, 153, 113)",
  },
  {
    teamId: "rb",
    team: "RB Honda RBPT",
    carImage: RB,
    chassis: "VCARB 01",
    colour: "rgb(102, 146, 255)",
  },
  {
    teamId: "haas",
    team: "Haas Ferrari",
    carImage: Hass,
    chassis: "VF-24",
    colour: "rgb(182, 186, 189)",
  },
  {
    teamId: "alpine",
    team: "Alpine Renault",
    carImage: Alpine,
    chassis: "A524",
    colour: "rgb(0, 147, 204)",
  },
  {
    teamId: "williams",
    team: "Williams Mercedes",
    carImage: Williams,
    chassis: "FW46",
    colour: "rgb(100, 196, 255)",
  },
  {
    teamId: "sauber",
    //team: "Kick Sauber Ferrari",
    team: "Sauber Ferrari",
    carImage: Sauber,
    chassis: "C44",
    colour: "rgb(0, 0, 0)",
  },
]
