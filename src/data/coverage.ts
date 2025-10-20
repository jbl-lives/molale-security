export type CoverageArea = {
  name: string;
  lat: number;
  lng: number;
  eta?:  string; // human string, e.g. "10–20 min"
};

export const COVERAGE_CENTER = { lat: -26.852, lng: 26.666 }; // Klerksdorp CBD (approx)

export const coverageAreas: CoverageArea[] = [
  { name: "Klerksdorp",        lat: -26.852, lng: 26.666, eta: "10–20 min" },
  { name: "Orkney",            lat: -26.980, lng: 26.673, eta: "10–20 min" },
  { name: "Kanana",            lat: -26.957, lng: 26.704, eta: "15–25 min" },
  { name: "Stilfontein",       lat: -26.844, lng: 26.768, eta: "15–25 min" },
  { name: "Khuma",             lat: -26.878, lng: 26.762, eta: "15–25 min" },
  { name: "Jouberton",         lat: -26.845, lng: 26.640, eta: "10–20 min" },
  { name: "Hartbeesfontein",   lat: -26.784, lng: 26.617, eta: "20–30 min" },
  { name: "Tigane",            lat: -26.803, lng: 26.628, eta: "20–30 min" },
  { name: "Vaal Reefs (Mines)",lat: -26.943, lng: 26.747, eta: "15–25 min" },
];
