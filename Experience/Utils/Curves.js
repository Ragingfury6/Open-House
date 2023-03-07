import { CatmullRomCurve3, Vector3 } from 'three';
export default class Curves {
  static CenterToCoding = new CatmullRomCurve3([
    new Vector3(-18.17, 10, -23.08),
    new Vector3(-7.25, 2, -8.33),
    new Vector3(-7.43, 1, -2.73),
    new Vector3(-7.79, 1, -2.66),
    new Vector3(-8.5, 1, -2.66),
    new Vector3(-8.5, 1, -1.95),
    new Vector3(-7.43, 1, -1.83),
    // new Vector3(-5.52, 0.59, 0.77),
    // new Vector3(-5.47, 0.59, -0.39),
    // new Vector3(-4.44, 0.59, -0.63),
    // new Vector3(-4.9, 0.59, -1.46),
    // new Vector3(-5.53, 0.59, -1.65),
  ]);
  static CodingToCenter = new CatmullRomCurve3([
    new Vector3(-5.7, 0.7, 2),
    new Vector3(-4.38, 1.52, 2.76),
    new Vector3(0, 10, 20),
  ]);
  static CenterToCodingLook = new CatmullRomCurve3([
    new Vector3(0, 0, 0),
    new Vector3(-5.5, 0.2, 0),
  ]);
  static CodingToCenterLook = new CatmullRomCurve3([
    new Vector3(-5.5, 0.2, 0),
    new Vector3(0, 0, 0),
  ]);
  static CenterToVet = new CatmullRomCurve3([
    new Vector3(-18.17, 10, -23.08),
    new Vector3(-12.11, 0.28, -8.33),
    new Vector3(-13.19, -0.75, -4.37),
    new Vector3(-14.53, -0.75, -3.21),
    // new Vector3(-17.84, -0.75, -3.74),
    new Vector3(-18.92, -0.75, -4.05),
    new Vector3(-24.14, -0.75, -4.43),
    new Vector3(-23.27, -0.75, -2.09),
  ]);
  static VetToCenter = new CatmullRomCurve3([
    new Vector3(4.5, 1.04, 1.04),
    new Vector3(1.52, 1.04, 2.76),
    new Vector3(0, 10, 20),
  ]);
  static CenterToVetLook = new CatmullRomCurve3([
    new Vector3(0, 0, 0),
    new Vector3(6, 0.2, 1.75),
  ]);
  static VetToCenterLook = new CatmullRomCurve3([
    new Vector3(6, 0.2, 1.75),
    new Vector3(0, 0, 0),
  ]);
}
