import RedBullCar from "../assets/2024/teams/red-bull-car.avif"
import Ferrari from "../assets/2024/teams/ferrari-car.avif"
import Mclaren from "../assets/2024/teams/mclaren-car.avif"
import Mercedes from "../assets/2024/teams/mercedes-car.avif"
import AstonMartin from "../assets/2024/teams/aston-martin-car.avif"
import Alpine from "../assets/2024/teams/alpine-car.avif"
import Hass from "../assets/2024/teams/haas-car.avif"
import Williams from "../assets/2024/teams/williams-car.avif"
import RB from "../assets/2024/teams/rb-car.avif"
import Sauber from "../assets/2024/teams/kick-sauber-car.avif"
import { sortBy } from "../utils/sortBy"

const teams = [
  {
    position: 1,
    team: "Red Bull Racing Honda RBPT",
    points: 446,
    carImage: RedBullCar,
    chassis: "RB20",
  },
  {
    position: 2,
    team: "McLaren Mercedes",
    points: 438,
    carImage: Mclaren,
    chassis: "MCL38",
  },
  {
    position: 3,
    team: "Ferrari",
    points: 407,
    carImage: Ferrari,
    chassis: "SF-24",
  },
  {
    position: 4,
    team: "Mercedes",
    points: 292,
    carImage: Mercedes,
    chassis: "W15",
  },
  {
    position: 5,
    team: "Aston Martin Aramco Mercedes",
    points: 74,
    carImage: AstonMartin,
    chassis: "AMR24",
  },
  {
    position: 6,
    team: "RB Honda RBPT",
    points: 34,
    carImage: RB,
    chassis: "VCARB 01",
  },
  {
    position: 7,
    team: "Haas Ferrari",
    points: 28,
    carImage: Hass,
    chassis: "VF-24",
  },
  {
    position: 8,
    team: "Alpine Renault",
    points: 13,
    carImage: Alpine,
    chassis: "A524",
  },
  {
    position: 9,
    team: "Williams Mercedes",
    points: 6,
    carImage: Williams,
    chassis: "FW46",
  },
  {
    position: 10,
    team: "Kick Sauber Ferrari",
    points: 0,
    carImage: Sauber,
    chassis: "C44",
  },
]
//cache this ?
const teamsData = sortBy(teams, "points")
export { teamsData }
