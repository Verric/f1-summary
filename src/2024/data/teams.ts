import RedBullCar from "../../assets/2024/cars/red-bull-car.avif"
import Ferrari from "../../assets/2024/cars/ferrari-car.avif"
import Mclaren from "../../assets/2024/cars/mclaren-car.avif"
import Mercedes from "../../assets/2024/cars/mercedes-car.avif"
import AstonMartin from "../../assets/2024/cars/aston-martin-car.avif"
import Alpine from "../../assets/2024/cars/alpine-car.avif"
import Hass from "../../assets/2024/cars/haas-car.avif"
import Williams from "../../assets/2024/cars/williams-car.avif"
import RB from "../../assets/2024/cars/rb-car.avif"
import Sauber from "../../assets/2024/cars/kick-sauber-car.avif"

export const teams = [
  {
    teamId: "red_bull",
    position: 1,
    team: "Red Bull Racing Honda RBPT",
    points: 446,
    carImage: RedBullCar,
    chassis: "RB20",
  },
  {
    teamId: "mclaren",
    position: 2,
    team: "McLaren Mercedes",
    points: 438,
    carImage: Mclaren,
    chassis: "MCL38",
  },
  {
    teamId: "ferrari",
    position: 3,
    team: "Ferrari",
    points: 407,
    carImage: Ferrari,
    chassis: "SF-24",
  },
  {
    teamId: "mercedes",
    position: 4,
    team: "Mercedes",
    points: 292,
    carImage: Mercedes,
    chassis: "W15",
  },
  {
    teamId: "aston_martin",
    position: 5,
    team: "Aston Martin Aramco Mercedes",
    points: 74,
    carImage: AstonMartin,
    chassis: "AMR24",
  },
  {
    teamId: "rb",
    position: 6,
    team: "RB Honda RBPT",
    points: 34,
    carImage: RB,
    chassis: "VCARB 01",
  },
  {
    teamId: "haas",
    position: 7,
    team: "Haas Ferrari",
    points: 28,
    carImage: Hass,
    chassis: "VF-24",
  },
  {
    teamId: "alpine",
    position: 8,
    team: "Alpine Renault",
    points: 13,
    carImage: Alpine,
    chassis: "A524",
  },
  {
    teamId: "williams",
    position: 9,
    team: "Williams Mercedes",
    points: 6,
    carImage: Williams,
    chassis: "FW46",
  },
  {
    teamId: "sauber",
    position: 10,
    team: "Kick Sauber Ferrari",
    points: 0,
    carImage: Sauber,
    chassis: "C44",
  },
]
